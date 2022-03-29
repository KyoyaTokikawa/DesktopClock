import { ComputedRef } from 'vue';
import { ClassName } from './index'
import { StoreClass } from './StoreClass';

export class DateTimeStore extends StoreClass {
    public static date = "date";
    public static DATETIME2 = "DATETIME2";
    public static yyyymmddhhmmss = "yyyymmddhhmmss";
    public static Year = "YYYY";
    public static Month = "MM";
    public static Day = "DD";
    public static Hour = "hh";
    public static Minutes = "mm";
    public static Seconds = "ss";
    public static Milliseconds = "nn";
    public static hhmmss = "hhmmss";
    public static hhmm = "hhmm";
    
    constructor()
    {
        super();
        setInterval(() => {
            this.DispatchChange({ name: DateTimeStore.date,           value: this.GetValue(DateTimeStore.date) } as ClassName);
            this.DispatchChange({ name: DateTimeStore.DATETIME2,      value: this.GetDATETIM2()                } as ClassName);
            this.DispatchChange({ name: DateTimeStore.yyyymmddhhmmss, value: this.GetHHMMss()                  } as ClassName);
            this.DispatchChange({ name: DateTimeStore.hhmmss,         value: this.GetHHMMss()                  } as ClassName);
            this.DispatchChange({ name: DateTimeStore.hhmm,           value: this.GetHHMM()                    } as ClassName);
            this.DispatchChange({ name: DateTimeStore.Hour,           value: this.GetNumHH()                   } as ClassName);
            this.DispatchChange({ name: DateTimeStore.Minutes,        value: this.GetNumMM()                   } as ClassName);
            this.DispatchChange({ name: DateTimeStore.Seconds,        value: this.GetNumSS()                   } as ClassName);
            this.DispatchChange({ name: DateTimeStore.Milliseconds,   value: this.GetNumNN()                   } as ClassName);
        });
    }

    private GetValue(value: string): string{
        const nowdate: Date = new Date();
        const val:string = nowdate.toString();
        switch (value)
        {
            case DateTimeStore.date:
                return val;
            case DateTimeStore.Year:
                return nowdate.getFullYear().toString();
            case DateTimeStore.Month:                
                return GetFillZero((nowdate.getMonth() + 1).toString());
            case DateTimeStore.Day:
                return GetFillZero(nowdate.getDate().toString());
            case DateTimeStore.Hour:
                return GetFillZero(nowdate.getHours().toString());
            case DateTimeStore.Minutes:
                return GetFillZero(nowdate.getMinutes().toString());
            case DateTimeStore.Seconds:
                return GetFillZero(nowdate.getSeconds().toString());                                
            default:
                return val;
        }
    }
    private GetHHMMss(): string{
        const HH: string = this.GetValue(DateTimeStore.Hour);
        const MM: string = this.GetValue(DateTimeStore.Minutes);
        const SS: string = this.GetValue(DateTimeStore.Seconds);
        return HH + ':' + MM + ':' + SS;
    }
    private GetHHMM(): string{
        const HH: string = this.GetValue(DateTimeStore.Hour);
        const MM: string = this.GetValue(DateTimeStore.Minutes);
        return HH + ':' + MM;
    }

    private GetMM(): string{
        const val: string = this.GetValue(DateTimeStore.Minutes);
        return val;
    }

    private GetSS(): string{
        const val: string = this.GetValue(DateTimeStore.Seconds);
        return val;
    }

    private GetNumSS(): number{
        const nowdate: Date = new Date();
        const val: number = nowdate.getSeconds();
        return val;
    }
    private GetNumMM(): number{
        const nowdate: Date = new Date();
        const val: number = nowdate.getMinutes();
        return val;
    }
    private GetNumHH(): number{
        const nowdate: Date = new Date();
        const val: number = nowdate.getHours();
        return val;
    }
    private GetNumNN(): number{
        const nowdate: Date = new Date();
        const val: number = nowdate.getMilliseconds();
        return val;
    }
    private GetDATETIM2(): string
    {
        const Year: string = this.GetValue(DateTimeStore.Year);
        const Month: string = this.GetValue(DateTimeStore.Month);
        const Day: string = this.GetValue(DateTimeStore.Day);
        const HH: string = this.GetValue(DateTimeStore.Hour);
        const MM: string = this.GetValue(DateTimeStore.Minutes);
        const SS: string = this.GetValue(DateTimeStore.Seconds);
        return Year + '-' + Month + '-' + Day + ' ' + HH + ':' + MM + ':' + SS;
    }

    get ValDate(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.date);
    }
    get ValDateTime2(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.DATETIME2);
    }
    get ValHHMMSS(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.hhmmss);
    }
    get ValHHMM(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.hhmm);
    }
    get ValYYYYMMDDHHMMSS(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.yyyymmddhhmmss);
    }
    get ValNumHH(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.Hour);
    }

    get ValNumMM(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.Minutes);
    }
    get ValNumSS(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.Seconds);
    }
    get ValNumNN(): ComputedRef
    {
        return this.GetComputed(DateTimeStore.Milliseconds);
    }
}

function GetFillZero(time: string): string
{
    let value = time;
    if (time.length < 2)
    {
        value = '0' + time;
    }
    return value;
}

