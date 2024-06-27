//Question 131: Create two modules; one that exports a class, and another that imports the class and creates an instance.

import { person } from "./person";

const sifra = new person("Sifra");
sifra.greet();