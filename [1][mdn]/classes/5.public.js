// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Public_class_fields
if (0) {
    class ClassWithInstanceField {
        instanceField = 'instance field'
    }

    class ClassWithStaticField {
        static staticField = 'static field'
    }

    class ClassWithPublicInstanceMethod {
        publicMethod() {
            return 'hello world'
        }
    }


}
if (0) {
    class ClassWithStaticField {
        static baseStaticField = 'base field'
    }

    class SubClassWithStaticField extends ClassWithStaticField {
        static subStaticField = 'sub class field'
    }

    console.log(SubClassWithStaticField.subStaticField)
// expected output: "sub class field"

    console.log(SubClassWithStaticField.baseStaticField)
// expected output: "base field"
} // as expected
if (1) {
    class ClassWithStaticField {
        static baseStaticField = 'base static field'
        static anotherBaseStaticField = this.baseStaticField

        static baseStaticMethod() {
            return 'base static method output'
        }
    }

    class SubClassWithStaticField extends ClassWithStaticField {
        static subStaticField = super.baseStaticMethod()
    }

    console.log(ClassWithStaticField.anotherBaseStaticField)
// expected output: "base static field"

    console.log(SubClassWithStaticField.subStaticField)
// expected output: "base static method output"

}