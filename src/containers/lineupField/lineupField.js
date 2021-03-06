import React,{Component} from 'react';
import { push } from 'react-router-redux';
import Pusher from 'pusher-js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getLineup, getLineupSuccess } from './actions';
import Field from '../../components/field'
import Lineup from '../../components/lineup'
import './lineupField.css';

class LineupField extends Component {

    constructor(props){
      super(props);
      this.state = {
      };
    }
    componentDidMount() {
      this.props.getLineup();

      const pusher = new Pusher('6a3acdaba86ad858948b', {
        cluster: 'eu',
        encrypted: true
      });
      const channel = pusher.subscribe('lineups');
      channel.bind('lineup-updated', data => {
        this.props.getLineupSuccess(data);
      });
    }
    render(props) {
      const data = this.props.lineup.data;
      var lastUpdated = this.props.lineup.lastUpdated;
      var dateString = lastUpdated && (`${lastUpdated.getUTCHours()}:${lastUpdated.getUTCMinutes()}:${lastUpdated.getUTCSeconds()} - ${lastUpdated.getUTCDate()}/${lastUpdated.getUTCMonth()+1}/${lastUpdated.getUTCFullYear()}`);
      return (
        <div>
          {!data && !this.props.lineup.error &&
            <div className="fieldLineupContainer-Alternative">Loading...</div>
          }
          {data &&
            <div>
              <h3 className="teamName">{data.team}</h3>
              <div className="fieldLineupContainer">
                <div className="fieldLineupContainer-Item">
                  <Field></Field>
                </div>
                <div className="fieldLineupContainer-Item">
                  <Lineup
                          formation={data.formation}
                          players={data.players}>
                  </Lineup>
                </div>
              </div>
              <div className="lastUpdated">Last Updated: {dateString}</div>
            </div>
          }
          {!data && this.props.lineup.error &&
            <div className="fieldLineupContainer-Alternative">
              Initial fetch failed.
              <button onClick={this.props.getLineup}>Retry</button>
            </div>
          }
        </div>
      );
    }
}

const mapDispatchToProps = dispatch => bindActionCreators({
  changePage: (page) => push(page),
  getLineup,
  getLineupSuccess
}, dispatch)

const mapStateToProps = (state) => {
  return state;
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LineupField)
