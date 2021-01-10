{
    let array = [2, 4, 6, 8];
    // {
    //
    //     let filtered = array.filter(x => {
    //         console.log(x)
    //         return x % 2 == 0;
    //     });
    //     console.log(filtered);
    // }

    // {
    //     let mapped = array.map(x => {
    //         console.log(x)
    //         return (x + 1);
    //     });
    //     console.log(mapped);
    // }
    //
    {
        let e=0;
        let reduced = array.reduce((a, b, c, d) => {
            return (a + b + c+d+e);
        }, e);
        console.log(reduced);
    }
}