import{pa as r,ya as s}from"./chunk-SSZ2K2W5.js";var e=class{static updateTreeValidity(a){Object.keys(a.controls).forEach(o=>{let t=a.controls[o];t instanceof r||t instanceof s?this.updateTreeValidity(t):(t.markAsDirty(),t.updateValueAndValidity({onlySelf:!0}))})}static clearValidators(a){Object.keys(a.controls).forEach(o=>{let t=a.controls[o];t instanceof r||t instanceof s?this.clearValidators(t):t.clearValidators()})}};export{e as a};