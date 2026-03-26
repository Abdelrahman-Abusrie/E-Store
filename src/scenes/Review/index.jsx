import ReviewSummary from './ReviewSummary';
import TopHeader from './TopHeader';
import ReviewDetails from './ReviewDetails';

export default function Review() {



    return (
        <div className="container mx-auto px-4 py-8 min-h-screen">
            <TopHeader />

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 pb-20">
                <ReviewDetails />
                <ReviewSummary />
            </div>
        </div>
    );
}
