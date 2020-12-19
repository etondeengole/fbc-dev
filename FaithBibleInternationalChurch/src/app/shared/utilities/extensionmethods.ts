import { Injectable } from '@angular/core';

@Injectable()
export class ExtensionMethods {

    constructor() {}

    isNullOrEmpty(str): boolean {
        return (!str || /^\s*$/.test(str));
    }

    isJson(str: string) {
        if (/^\s*$/.test(str)) return false;
        str = str.replace(/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g, '@');
        str = str.replace(/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g, ']');
        str = str.replace(/(?:^|:|,)(?:\s*\[)+/g, '');
        return (/^[\],:{}\s]*$/).test(str);
    }

    isImage(file: any): boolean {
        //mimeType=image/jpeg or application/pdf etc...
        return file.type.split('/')[0] === 'image';//returns true or false
    }
   
    dateToStringDisplay(date: Date): string{
        let month = date.getMonth() + 1;
        let fileDate = date.getFullYear() + (("0" + month)).slice(-2) + (("0" + (date.getDate())).slice(-2));
        return fileDate;
    }

    dateToStringRequest(date: Date): string{
        let month = date.getMonth() + 1;
        let fileDate = date.getFullYear() + '-' + (("0" + month)).slice(-2) +  '-' + (("0" + (date.getDate())).slice(-2));
        return fileDate;
    }

    generateFileName(date: Date, fileName: string): string{
      return this.dateToStringDisplay(date) + '_' + fileName;
    }

    dateToStringDisplayReport(date: Date): string{
        let month = date.getMonth() + 1;
        let fileDate = date.getFullYear() + '-' + (("0" + month)).slice(-2) + '-' + (("0" + (date.getDate())).slice(-2));
        return fileDate;
    }

}
