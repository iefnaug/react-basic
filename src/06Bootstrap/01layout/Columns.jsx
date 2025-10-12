export default function () {
    return  (
        <Demo4 />
    )
}

function Demo1() {
    return (
        <div className={"container text-center bg-secondary text-white d-flex"} style={{ height: "500px" }}>
            <div className={"row align-items-start"}>
                <div className={"col"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
            </div>
            <div className={"row align-items-center"}>
                <div className={"col"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
            </div>
            <div className={"row align-items-end"}>
                <div className={"col align-self-center"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
                <div className={"col"}>One of Three columns</div>
            </div>
        </div>
    )
}

function Demo2() {
    return (
        <div className="container text-center">
            <div className="row justify-content-start">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-end">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-around">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-between">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
            <div className="row justify-content-evenly">
                <div className="col-4">
                    One of two columns
                </div>
                <div className="col-4">
                    One of two columns
                </div>
            </div>
        </div>
    )
}

function Demo3() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>

                {/*<!-- Force next columns to break to new line at md breakpoint and up -->*/}
                <div className="w-100 d-none d-md-block"></div>

                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
                <div className="col-6 col-sm-4">.col-6 .col-sm-4</div>
            </div>
        </div>
    )
}

function Demo4() {
    return (
        <div className="container text-center">
            <div className="row">
                <div className="col-6 offset-6">.col-6</div>
            </div>
        </div>
    )
}