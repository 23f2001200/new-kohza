import React from 'react';
import { AlertTriangle, Home, RefreshCw } from 'lucide-react';
import { Button } from '@/components/ui/button';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = { hasError: false, error: null };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true, error };
    }

    componentDidCatch(error, errorInfo) {
        console.error("ErrorBoundary caught an error:", error, errorInfo);
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-background flex flex-col items-center justify-center p-4 text-foreground font-sans">
                    <div className="max-w-md w-full text-center space-y-6">

                        {/* Icon */}
                        <div className="relative w-24 h-24 mx-auto mb-8">
                            <div className="absolute inset-0 bg-destructive/20 rounded-full animate-pulse" />
                            <div className="absolute inset-0 flex items-center justify-center">
                                <AlertTriangle className="w-12 h-12 text-destructive" />
                            </div>
                        </div>

                        {/* Content */}
                        <div className="space-y-2">
                            <h1 className="text-3xl font-bold tracking-tight">Oops! Something went wrong.</h1>
                            <p className="text-muted-foreground">
                                We encountered an unexpected error. Please try refreshing the page or return home.
                            </p>
                        </div>

                        {/* Actions */}
                        <div className="flex flex-col sm:flex-row gap-3 justify-center pt-4">
                            <Button
                                onClick={() => window.location.reload()}
                                variant="outline"
                                className="gap-2"
                            >
                                <RefreshCw className="w-4 h-4" />
                                Reload Page
                            </Button>

                            <Button
                                onClick={() => window.location.href = '/'}
                                className="gap-2"
                            >
                                <Home className="w-4 h-4" />
                                Return Home
                            </Button>
                        </div>

                        {/* Technical Details (Optional/Dev only) */}
                        {process.env.NODE_ENV === 'development' && this.state.error && (
                            <div className="mt-8 p-4 bg-muted/50 rounded-lg text-left overflow-auto max-h-40 text-xs font-mono text-muted-foreground">
                                {this.state.error.toString()}
                            </div>
                        )}

                    </div>
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
