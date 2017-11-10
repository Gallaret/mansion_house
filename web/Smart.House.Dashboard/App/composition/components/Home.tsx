import * as React from 'react';
import * as Scroll from 'react-scroll';
import ScrollEffect from '../../lib/scroll-effect';
import Fullscreen from '../../lib/fullscreen';
import CameraList from './devices/camera/Displayer';
import Floor from './floor/Floor';
import Wall from './wall/Wall';
import Basement from './basement/Basement';
import Background from './background/Background';

export default class Home extends React.Component<{}, {}> {
    public render() {
        return <div className="container-fluid">
            <Fullscreen>           
                <div className="row" id="hero" style={{ position: 'relative' }}>
                    <Background />

                    <CameraList />

                    <Wall />

                    <Floor />
                                      
                    <Basement />          
     
                </div>
            </Fullscreen>      
        </div>;
    }
}
