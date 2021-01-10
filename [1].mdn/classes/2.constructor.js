if (0) {
    class Polygon {
        v = "some";

        constructor() {
            this.name = 'Polygon';
        }
    }

    const poly1 = new Polygon();

    console.log(poly1.v);
// expected output: "Polygon"
}
if (1) {
    class Triple {
        static customName = 'Tripler';
        static description = 'I triple any number you provide';

        static triple(n = 1) {
            return n * 3;
        }
    }

    class BiggerTriple extends Triple {
        static longDescription;
        static description = 'I square the triple of any number you provide';

        static triple(n) {
            return super.triple(n) * super.triple(n);
        }
    }

    console.log(Triple.description);   // 'I triple any number you provide'
    console.log(Triple.triple());      // 3
    console.log(Triple.triple(6));     // 18

    let tp = new Triple();

    console.log(BiggerTriple.triple(3));        // 81 (not affected by parent's instantiation)
    console.log(BiggerTriple.description);      // 'I square the triple of any number you provide'
    console.log(BiggerTriple.longDescription);  // undefined
    console.log(BiggerTriple.customName);       // 'Tripler'

    console.log(tp.triple());         // 'tp.triple is not a function'.

}
