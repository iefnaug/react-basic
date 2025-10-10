export default function Grid({ children }) {
    return (
        <Demo4/>
    )
}

function Demo1() {
    return (
        <>
            <div className="container text-center bg-info">
                {/*justify-content-md-center 内容对齐*/}
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
                    {/*col-md-auto 宽度自适应内容，当容器宽度小于md时，内容独占一行*/}
                    <div className="col-md-auto">
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
                {/*这里一个col就是6*/}
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
            </div>
            <div className="row row-cols-3">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
            </div>
            <div className="row row-cols-auto">
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
                <div className="col">Column</div>
            </div>
            <div className="container text-center">
                <div className="row row-cols-4">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col-6">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-4">
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                    <div className="col">Column</div>
                </div>
            </div>
            {/*嵌套*/}
            <div className="container text-center">
                <div className="row">
                    <div className="col-sm-3">
                        Level 1: .col-sm-3
                    </div>
                    <div className="col-sm-9">
                        <div className="row">
                            <div className="col-8 col-sm-6">
                                Level 2: .col-8 .col-sm-6
                            </div>
                            <div className="col-4 col-sm-6">
                                Level 2: .col-4 .col-sm-6
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}