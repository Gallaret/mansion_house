import * as React from 'react';
import Television from '../devices/television/Television';
import Ambilight from '../devices/ambilight/Ambilight';
import Shelf from './shelf/Shelf';
import Bookcase from './bookcase/Bookcase';
import Picture from './Picture';

interface Props {
}

interface State {
}

export default class Wall extends React.Component<Props, State> {

    render() {
        return  <div className="center" style={{ display: "block", height: "300px", marginTop: '28px' }}>
                        <div style={{ width: "40%", float: "left", height: "300px" }}>
                            <Picture />
                        </div>

                        <div style={{ width: "20%", float: "left" }}>
                            <div style={{ width: "100%", height: "270px" }}>

                                <div style={{ margin: "0 auto", width: "250px", position: "relative" }}>
                                    <Ambilight />
                                    <Television />
                                </div>

                                <Shelf />
                            </div>                      

                        </div>
                                           
                        <div style={{ width: "40%", float: "right", height: "300px" }}>
                            <div style={{ float: "left", marginLeft: "100px" }}>
                                <Bookcase />
                            </div>
                        </div>
                    </div> 
    }
}

// Set up HMR re-rendering.
if (module.hot) {
    module.hot.accept();
}