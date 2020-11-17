import React from 'react';

const withData = (WrappedComponent) => {

    class WithDataClass extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                data: []
            };
        }
        componentDidMount() {

            setTimeout(() => {
                fetch(this.props.dataSource)
                    .then(Response => Response.json())
                    .then(data => this.setState({ data: data.slice(0, 3) }));
            }, 2000);
        }

        render() {
            console.log(this.state.data.length);
            return (
                this.state.data.length < 1
                    ? <h1>Loading.............</h1>
                    : <WrappedComponent data={this.state.data}{...this.props} />
            );
        }
    }
    return WithDataClass;
};

export default withData;