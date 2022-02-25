// Write your code here
import {Component} from 'react'
import LatestMatch from '../LatestMatch'
import './index.css'

class TeamMatches extends Component {
  state = {teamData: [], teamName: ''}

  componentDidMount = () => {
    this.getTeamData()
  }

  getTeamData = async () => {
    const {match} = this.props
    const {params} = match
    const {id} = params
    const response = await fetch(`https://apis.ccbp.in/ipl/${id}`)
    const data = await response.json()
    const updatedData = {
      teamBannerUrl: data.team_banner_url,
      latestMatchDetails: data.latest_match_details,
      recentMatches: data.recent_matches,
    }
    this.setState({teamData: updatedData, teamName: id})
  }

  render() {
    const {teamData, teamName} = this.state

    const {teamBannerUrl, latestMatchDetails} = teamData

    const updatedDetails = {
      umpires: latestMatchDetails.umpires,
      result: latestMatchDetails.result,
      manOfTheMatch: latestMatchDetails.man_of_the_match,
      id: latestMatchDetails.id,
      date: latestMatchDetails.date,
      venue: latestMatchDetails.venue,
      competingTeam: latestMatchDetails.competing_team,
      competingTeamLogo: latestMatchDetails.competing_team_logo,
      firstInnings: latestMatchDetails.first_innings,
      secondInnings: latestMatchDetails.second_innings,
      matchStatus: latestMatchDetails.match_status,
    }

    const classNameBackground = `team-matches-container team-${teamName}`

    return (
      <div className={classNameBackground}>
        <img alt="banner" className="team-banner-image" src={teamBannerUrl} />
        <h1>Latest Matches</h1>
        <LatestMatch key={updatedDetails.id} matchDetails={updatedDetails} />
      </div>
    )
  }
}

export default TeamMatches
