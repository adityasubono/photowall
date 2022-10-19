import React, {Component} from 'react';
import Title from "./Title";
import PhotoWall from "./PhotoWall";
import AddPhoto from "./AddPhoto";
import {Route} from "react-router-dom";
import {removePost} from "../redux/action";


class Main extends Component {
    constructor() {
        super();
    }

    componentDidMount() {
        this.props.removePost(1)
    }

    render() {
        console.log('props', this.props)
        return (
            <div>
                <Route exact path={'/'} render={() => (
                    <div>
                        <Title title={'Photowall'}/>
                        <PhotoWall {...this.props}/>
                    </div>
                )}/>

                {/*<Route path={'/AddPhoto'} render={({history}) => (*/}
                {/*    <AddPhoto onAddPhoto={(addedPost) => {*/}
                {/*        this.addPhoto(addedPost)*/}
                {/*        history.push('/')*/}
                {/*    }}/>*/}
                {/*)}/>*/}
            </div>
        );
    }
}

export default Main
