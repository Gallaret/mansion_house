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