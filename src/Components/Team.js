function Team({ info }) {
    return (
        <div className="container">
            <div className="row">
                {
                    info.map(
                        (p) => {
                            return <div key={p.TeamName}>
                                <div class="row">
                                    <img src="E:\Casestudy 1\master.jpg" class="col-md-4 p-3 " />
                                    <table class="table table-borderless col-md-4">
                                        <tr><td colspan="3" class="font-weight-bold">{p.TeamName}</td></tr>
                                        <tr><td>Captain's Name</td><td colspan="2">{p.Captain}</td></tr>
                                        <tr><td>Year Founded</td><td colspan="2">{p.FoundedYear}</td></tr>
                                        <tr><td>Titles</td><td colspan="2">{p.titles}</td></tr>
                                        <tr><td>Home Ground</td><td colspan="2">{p.Home}</td></tr>
                                    </table>
                                </div>
                            </div>
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Team;