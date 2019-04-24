import { Extension } from "qlik";

// see https://github.com/Microsoft/TypeScript/issues/17736#issuecomment-323073256
export { }; // this file needs to be a module

declare global {
  function define(definitions:string[], controller:(qlik:any)=>Extension) : void;
}
