import * as React from "react";
import { Provider } from 'react-redux';
import { renderToString } from 'react-dom/server';
import { match, RouterContext } from 'react-router';
import createMemoryHistory from 'history/lib/createMemoryHistory';
import { createServerRenderer, RenderResult } from 'aspnet-prerendering';
import routes from './composition/routes';
import configureStore from './composition/configureStore';
import { Camera, Display } from './composition/components/devices/camera/model/model';
import { ADD_CAMERA, CREATE_DISPLAY } from './composition/components/devices/camera/state/displayer';
import { ADD_TELEVISION } from './composition/components/devices/television/states/television';
import * as Ambilight from './composition/components/devices/ambilight/state/actions';
import * as Lamp from './composition/components/devices/lighting/state/actions';
import * as Hifi from './composition/components/devices/hifi/state/actions';
import * as Player from './composition/components/devices/player/state/actions';

export default createServerRenderer(params => {
    return new Promise<RenderResult>((resolve, reject) => {
        // Match the incoming request against the list of client-side routes
        match({ routes, location: params.location }, (error, redirectLocation, renderProps: any) => {
            if (error) {
                throw error;
            }

            // If there's a redirection, just send this information back to the host application
            if (redirectLocation) {
                resolve({ redirectUrl: redirectLocation.pathname });
                return;
            }

            // If it didn't match any route, renderProps will be undefined
            if (!renderProps) {
                throw new Error(`The location '${params.url}' doesn't match any route configured in react-router.`);
            }

            const store = configureStore();

            store.dispatch({
                type: CREATE_DISPLAY,
                payload: {
                    id: 1
                }
            });

            store.dispatch({
                type: ADD_CAMERA,
                payload: {
                    display: 1,
                    camera: {
                        name: 'Salon Front',
                        id: 1
                    }
                }
            });
            store.dispatch({
                type: ADD_TELEVISION,
                payload: {
                    id: 1,
                    name: "sony bravia",
                    isFireplaceRunning: false,
                    isAquariumRunning: false
                }
            });
            store.dispatch({
                type: Ambilight.ADD,
                payload: {
                    id: 1,
                    name: "hyperion",
                    background: 'url(images/ambient.jpg)',
                    isActive: true
                }
            });
            store.dispatch({
                type: Lamp.ADD_LAMP,
                payload: {
                    id: 1,
                    name: "hue-left",
                    color: '#f650e8',
                    isActive: true,
                    position: 'left'
                }
            });
            store.dispatch({
                type: Lamp.ADD_LAMP,
                payload: {
                    id: 2,
                    name: "hue-right",
                    color: '#23f343',
                    isActive: true,
                    position: 'right'
                }
            });
            store.dispatch({
                type: Hifi.ADD_HIFI,
                payload: {
                    id: 1,
                    name: 'my-hifi'
                }
            });

            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Front-Left',
                        id: 1,
                        type: 'Front',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Front-Right',
                        id: 2,
                        type: 'Front',
                        position: 'right',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Side-Left',
                        id: 3,
                        type: 'Side',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Side-Right',
                        id: 4,
                        type: 'Side',
                        position: 'right',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Back-Left',
                        id: 5,
                        type: 'Back',
                        position: 'left',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Hifi.ADD_SPEAKER,
                payload: {
                    hifi: 1,
                    speaker: {
                        name: 'Back-Right',
                        id: 6,
                        type: 'Back',
                        position: 'right',
                        isActive: true
                    }
                }
            });
            store.dispatch({
                type: Player.ADD_PLAYER,
                payload: {
                    id: 1,
                    name: 'smart-player',
                    video: 'Detroit',
                    isRunning: false,
                    isPaused: false,
                    isActive: true,
                    settings: {
                        id: 1,
                        backgroundPlay: true
                    }
                }
            });
            const app = (
                <Provider store={store}>
                    <RouterContext {...renderProps} />
                </Provider>
            );

            // Perform an initial render that will cause any async tasks (e.g., data access) to begin
            renderToString(app);
            // Once the tasks are done, we can perform the final render
            // We also send the redux store state, so the client can continue execution where the server left off
            params.domainTasks.then(() => {
                resolve({
                    html: renderToString(app),
                    globals: { initialReduxState: store.getState() }
                });
            }, reject); // Also propagate any errors back into the host application
        });
    });
});