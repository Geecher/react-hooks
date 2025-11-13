import {Component} from "react";

class ErrorBoundary extends Component {
    state = {hasError: false, error: null};
    static getDerivedStateFromError(error) {
        return {hasError: true, error};
    }

    componentDidCatch(error, errorInfo) {
        console.error('Error caught by boundary:', error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return this.props.fallback
        }
        return this.props.children;
    }
}

export default ErrorBoundary;