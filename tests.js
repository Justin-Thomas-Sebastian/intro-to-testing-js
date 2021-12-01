// Unit tests for the helloWorld function
describe('helloWorld', function() {
    it('should be a defined function', function() {
      expect(typeof helloWorld).toBe('function');
    });
    it('should return a string when called', function() {
      expect(typeof helloWorld()).toBe("string");
    });
    it('should return the string "Hello, World!" when executed', function() {
      expect(helloWorld()).toBe("Hello, World!");
    });
    it("should never return 'undefined' when called", function() {
      expect(helloWorld()).not.toBe(undefined);
    });
});

// Unit Tests for sayHello function
describe('sayHello', function() {
    it("should be a defined function", function(){
       expect(typeof sayHello).toBe("function");
    });
    it("should return a string when called", function(){
        expect(typeof sayHello()).toBe("string");
    });
    it("sayHello('Sebastian') should return 'Hello, Sebastian!'", function(){
        expect(sayHello("Sebastian")).toBe("Hello, Sebastian!");
    });
    it("sayHello('Justin') should return 'Hello, Justin!'", function(){
        expect(sayHello("Justin")).toBe("Hello, Justin!");
    });
    it("sayHello('Pat') should return 'Hello, Pat!'", function(){
        expect(sayHello("Pat")).toBe("Hello, Pat!");
    });
    it("sayHello() should return 'Hello, Stranger!'", function(){
        expect(sayHello()).toBe('Hello, Stranger!');
    });
    it("sayHello(true) should return 'Hello, Stranger!'", function(){
        expect(sayHello(true)).toBe('Hello, Stranger!');
    });
    it("sayHello(false) should return 'Hello, Stranger!'", function(){
        expect(sayHello(false)).toBe('Hello, Stranger!');
    });
    it("sayHello(null) should return 'Hello, Stranger!'", function(){
        expect(sayHello(null)).toBe('Hello, Stranger!');
    });
    it("sayHello('') should return 'Hello, Stranger!'", function(){
        expect(sayHello('')).toBe('Hello, Stranger!');
    });
    it("sayHello(2.3) should return 'Hello, World!'", function(){
        expect(sayHello(2.3)).toBe('Hello, World!');
    });
    it("sayHello(obj), obj being an object type, should return 'Hello, World!'", function(){
        expect(sayHello(obj)).toBe("Hello, World!");
    });
    it("sayHello(foo), foo being a function, should return 'Hello, World!'", function(){
        expect(sayHello(foo)).toBe("Hello, World!");
    });
});

// Unit Tests for isFive
describe('isFive', function() {
    it('should be a defined function', function() {
        expect(typeof isFive).toBe("function");
    });
    it('should return a boolean when called', function() {
        expect(typeof isFive()).toBe("boolean");
    });
    it('should return the boolean true when 5 (Number) is passed', function() {
        expect(isFive(5)).toBe(true);
    });
    it('should return the boolean false when "5" (String) is passed', function() {
        expect(isFive("5")).toBe(false);
    });
});

// Unit Tests for isEven
describe('isEven', function(){
    it("should be a defined function", function(){
        expect(typeof isEven).toBe("function");
    });
    it("should return a boolean when called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("should return true when 2 (Number) is passed", function(){
        expect(isEven(2)).toBe(true);
    });
    it("should return true when -4 (Number) is passed", function(){
        expect(isEven(-4)).toBe(true);
    });
    it("should return false when 3 (Number) is passed", function(){
        expect(isEven(3)).toBe(false);
    });
    it("should return false when 'banana' is passed", function(){
        expect(isEven("banana")).toBe(false);
    });
    it("should return true when '8' is passed", function(){
        expect(isEven("8")).toBe(true);
    });
    it("should return false when Infinity is passed", function(){
        expect(isEven(Infinity)).toBe(false);
    });
    it("should return false when true is passed", function(){
        expect(isEven(true)).toBe(false);
    });
    it("should return false when false is passed", function(){
        expect(isEven(false)).toBe(false);
    });
    it("should return false when there is no arguments passed", function(){
        expect(isEven()).toBe(false);
    });

});

// Unit Tests for isVowel
describe("isVowel", function(){
    it("should be a defined function", function(){
       expect(typeof isVowel).toBe("function");
    });
    it("should return a boolean when called", function(){
        expect(typeof isEven()).toBe("boolean");
    });
    it("it should return true when 'a' is passed", function(){
        expect(isVowel("a")).toBe(true);
    });
    it("it should return true when 'A' is passed", function(){
        expect(isVowel("A")).toBe(true);
    });
    it("it should return false when 'y' is passed", function(){
        expect(isVowel("y")).toBe(false);
    });
    it("it should return false when 4 (Number) is passed", function(){
        expect(isVowel(4)).toBe(false);
    });
    it("it should return false when true is passed", function(){
        expect(isVowel(true)).toBe(false);
    });
    it("it should return false when false is passed", function(){
        expect(isVowel(false)).toBe(false);
    });
    it("it should return false when 'banana' is passed", function(){
        expect(isVowel("banana")).toBe(false);
    });
    it("it should return false when no arguments are passed", function(){
        expect(isVowel()).toBe(false);
    });
});

// Unit Tests for add
describe("add", function(){
    it("should be a defined function", function(){
        expect(typeof add).toBe("function");
    });
    it("should return a Number when called", function(){
        expect(typeof add()).toBe("number");
    });
    it("should return 5 when 2 and 3 are passed", function(){
        expect(add(2,3)).toBe(5);
    });
    it("should return -12 when -3 and -9 are passed", function(){
        expect(add(-3,-9)).toBe(-12);
    });
    it("should return 11 when '5' and 6 are passed", function(){
        expect(add("5",6)).toBe(11);
    });
    it("should return NaN when 'banana' and 'split' are passed", function(){
        expect(add("banana","split")).toBeNaN();
    });
    it("should return NaN when 2 and 'apples' are passed", function(){
        expect(add(2,"apples")).toBeNaN();
    });
    it("should return NaN when no arguments are passed", function(){
        expect(add()).toBeNaN();
    });
});





