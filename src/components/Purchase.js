import OrderCard from './OrderCard';

function Purchase() {

    return (
        <div className="container">
            <h2>My purchases</h2>
            <div className="orderCards">
                {/* map out OrderCards here */}
                <OrderCard />
            </div>
        </div>
    )

}

export default Purchase;