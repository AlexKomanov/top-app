import { HtagProps } from './Htag.props'

export const Htag = ({ tag, children }: HtagProps): JSX.Element => {
    switch (tag) {
        case 'h1':
            return <h1>{children}</h1>
        case 'h2':
            return <h2>{children}</h2>
        case 'h3':
            return <h3>{children}</h3>


        default:
            return <></>;
    }

};
