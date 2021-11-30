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




