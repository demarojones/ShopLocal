import { Component, forwardRef, EventEmitter, Output, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true
    }
  ]
})
export class RatingComponent implements ControlValueAccessor {

  @Input()
  rate: number;

  @Input()
  readonly: boolean;
  @Input()
  size = 'small';
  @Input()
  fill = 'clear';
  @Output()
  rateChange: EventEmitter<number> = new EventEmitter();
  hoverRate: number;
  propagateChange: Function;

  onClick(rate) {
    this.rate = rate;
    this.rateChange.emit(this.rate);
    this.propagateChange(this.rate);
  }

  writeValue(value: any): void {
    if (value !== undefined) {
      this.rate = value;
    }
  }

  registerOnChange(fn: any): void {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any): void {}

  setDisabledState?(isDisabled: boolean): void {
    this.readonly = isDisabled;
  }

}
