export default function Grid({ children }) {
    return (
        <Demo4/>
    )
}

function Demo1() {
    return (
        <>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col col-lg-2">
                        1 of 3
                    </div>
                    <div className="col-auto">
                        Variable width content
                    </div>
                    <div className="col col-lg-2">
                        3 of 3
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        1 of 3
                    </div>
                    <div className="col-auto">
                        Variable width content
                    </div>
                    <div className="col col-lg-2">
                        3 of 3
                    </div>
                </div>
            </div>
        </>
    )
}

function Demo2() {
    return (
        <>
            <div className="container">
                <div className="row text-center">
                    <div className="col-sm-8 col-md-4">col-sm-8</div>
                    <div className="col-sm-4 col-md-4">col-sm-4</div>
                </div>
                <div className="row">
                    <div className="col-sm">col-sm</div>
                    <div className="col-sm">col-sm</div>
                    <div className="col-sm">col-sm</div>
                </div>
            </div>
        </>
    )
}

function Demo3() {
    return (
        <div className="container text-center">
            {/* Stack the columns on mobile by making one full-width and the other half-width */}
            <div className="row">
                <div className="md-8">.col-md-8</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>

            {/*{Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop}*/}
            <div className="row">
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
                <div className="col-6 col-md-4">.col-6 .col-md-4</div>
            </div>

            {/*{Columns are always 50% wide, on mobile and desktop}*/}
            <div className="row">
                <div className="col-6">.col-6</div>
                <div className="col-6">.col-6</div>
            </div>
        </div>
    )
}

function Demo4() {
    return (
        <div className="container text-center">
            <div className="row row-cols-2">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
            </div>
        </div>
    )
}