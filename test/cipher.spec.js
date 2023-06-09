// [Español]
// Importamos el objeto `cipher`, que contiene los métodos `encode` y `decode`
//
// [Português]
// Importamos o objeto `cipher`, que contém os métodos `encode` e `decode`

import cipher from "../src/cipher";

describe("cipher", () => {
  it("should be an object", () => {
    expect(typeof cipher).toBe("object");
  });

  describe("cipher.cipherMessage", () => {
    it("should be a function", () => {
      expect(typeof cipher.cipherMessage).toBe("function");
    });

    it("should throw TypeError when invoked with wrong argument types", () => {
      expect(() => cipher.cipherMessage()).toThrow(TypeError);
      expect(() => cipher.cipherMessage(0)).toThrow(TypeError);
      expect(() => cipher.cipherMessage(null, [])).toThrow(TypeError);
      expect(() => cipher.cipherMessage(0, 0)).toThrow(TypeError);
    });

    it('should return "HIJKLMNOPQRSTUVWXYZABCDEFG" for "ABCDEFGHIJKLMNOPQRSTUVWXYZ" with offset 33', () => {
      expect(cipher.cipherMessage(33, "ABCDEFGHIJKLMNOPQRSTUVWXYZ")).toBe(
        "HIJKLMNOPQRSTUVWXYZABCDEFG"
      );
    });

    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "hijklmnopqrstuvwxyzabcdefg" for "abcdefghijklmnopqrstuvwxyz" with offset 33', () => {
      expect(cipher.cipherMessage(33, "abcdefghijklmnopqrstuvwxyz")).toBe(
        "hijklmnopqrstuvwxyzabcdefg"
      );
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" for " !@"', () => {
      expect(cipher.cipherMessage(33, " !@")).toBe(" !@");
    });
  });

  describe("cipher.decipherMessage", () => {
    it("should be a function", () => {
      expect(typeof cipher.decipherMessage).toBe("function");
    });

    it("should throw TypeError when invoked with wrong argument types", () => {
      expect(() => cipher.decipherMessage()).toThrow(TypeError);
      expect(() => cipher.decipherMessage(0)).toThrow(TypeError);
      expect(() => cipher.decipherMessage(null, [])).toThrow(TypeError);
      expect(() => cipher.decipherMessage(0, 0)).toThrow(TypeError);
    });

    it('should return "ABCDEFGHIJKLMNOPQRSTUVWXYZ" for "HIJKLMNOPQRSTUVWXYZABCDEFG" with offset 33', () => {
      expect(cipher.decipherMessage(33, "HIJKLMNOPQRSTUVWXYZABCDEFG")).toBe(
        "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
      );
    });

    //
    // Hacker edition
    //
    // [Español]
    // Si decides agregar soporte para minúsculas descomenta el test a
    // continuación.
    //
    // [Português]
    // Se quiser adicionar testes para letras minúsculas, descomente o teste
    // abaixo.
    //
    it('should return "abcdefghijklmnopqrstuvwxyz" for "hijklmnopqrstuvwxyzabcdefg" with offset 33', () => {
      expect(cipher.decipherMessage(33, "hijklmnopqrstuvwxyzabcdefg")).toBe(
        "abcdefghijklmnopqrstuvwxyz"
      );
    });

    // Hacker edition
    //
    // [Español]
    // Si decides implementar soporte para caracteres no alfabéticos descomenta
    // el test a continuación.
    //
    // [Português]
    // Se quiser adicionar testes para caracteres não alfabéticos, descomente o
    // teste abaixo.
    //
    it('should return " !@" para " !@"', () => {
      expect(cipher.decipherMessage(33, " !@")).toBe(" !@");
    });
  });
});
