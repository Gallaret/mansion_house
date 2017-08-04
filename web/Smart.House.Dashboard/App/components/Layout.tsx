import * as React from 'react';
import NavMenu from './NavMenu';
import RouteTransition from '../lib/route-transition';

export interface LayoutProps {
    body: React.ReactElement<any>;
}

export interface LayoutStates {
}

export class Layout extends React.Component<LayoutProps, LayoutStates> {

    public render() {
        return <div>
            <NavMenu />
            <RouteTransition pathname={typeof window !== 'undefined' ? window.location.pathname : ''}>
                {this.props.body}
            </RouteTransition>
        </div>;
    }
}

