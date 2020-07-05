import React from 'react'
import Navbar from './Navbar'
import './App.css'
class Show extends React.Component {
    constructor(props) {
        super(props);
    }
    render() {
        console.log(this.props)
        return (
            <div>
                <Navbar />
                <section id="info">
                <div className="row" id="row1">
                    {
                        this.props.location.state.data.result.map((dat) => {
                            return (

                                
                                    <div className="card">
                                        <img src={dat.titlePhoto} alt="Avatar" style={{ width: "50%" }}></img>
                                        <h5><b>Name:{dat.handle}</b></h5>
                                        <p><b>Maximum-Rating:{dat.maxRating}</b></p>
                                        <p><b>Current-Rating:{dat.rating}</b></p>
                                        <p><b>Maximum-Rank:{dat.maxRank}</b></p>
                                        <p><b>Current-Rank:{dat.rank}</b></p>
                                        <p><b>Contribution:{dat.contribution}</b></p>
                                    </div>
                            )
                        })
                    }
                    {
                        this.props.location.state.data1.result.map((dat) => {
                            return (
                                
                                    <div className="card">
                                        <img src={dat.titlePhoto} alt="Avatar" style={{ width: "50%" }}></img>

                                        <h5><b>Name:{dat.handle}</b></h5>
                                        <p><b>Maximum-Rating:{dat.maxRating}</b></p>
                                        <p><b>Current-Rating:{dat.rating}</b></p>
                                        <p><b>Maximum-Rank:{dat.maxRank}</b></p>
                                        <p><b>Current-Rank:{dat.rank}</b></p>
                                        <p><b>Contribution:{dat.contribution}</b></p>
                                    </div>
                            
                            )
                        })
                    }
                    </div>
                </section>
            </div>

        )
    }
}

export default Show