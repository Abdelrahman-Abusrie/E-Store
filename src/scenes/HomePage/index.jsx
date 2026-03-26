import Categories from "./Categories";
import Featured from "./Featured";
import Landing from "./Landing";
import Sale from "./Sale";

/**
 * HomePage Component
 * 
 * The main landing page layout assembling Landing, Categories, Featured products, and Sale banner.
 */
export default function HomePage() {
    return (
        <div>
            <Landing />
            <Categories />
            <Featured />
            <Sale />
        </div>
    );
}