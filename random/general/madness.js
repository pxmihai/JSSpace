function at01(){
    console.log("t01")
    at02();
    function at001() {
        console.log("at001")
    }

    function at002() {
        console.log("at002")
    }

    function at003() {
        console.log("at003")

        function at0001() {
            console.log("at0001")

            function at00001() {
                console.log("at00001")
            }
        }
    }
}

function at02(){
    console.log("at02")
}
at02();
at01();
