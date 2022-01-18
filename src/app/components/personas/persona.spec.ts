import { Persona } from './persona';

describe('Persona', () => {
  it('should create an instance', () => {
    expect(new Persona()).toBeTruthy();
  });
  it('se inicializan los valores', () => {
    let persona: Persona = new Persona();
    expect(persona).toBeTruthy();
    expect(persona.nombre).not.toBeNull();
    expect(persona.direccion).not.toBeNull();
    expect(persona.nombre).toEqual("");
    expect(persona.direccion).toEqual("");

  });
});
