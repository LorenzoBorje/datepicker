import React, { Component } from 'react';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';

export default class App extends React.Component {
  render() {
    return (
      <div>
        <h1>DatePicker</h1>
        <DateRangePicker
          startDate={this.state.startDate} 
          startDateId="start-date" 
          endDate={this.state.endDate}
          endDateId="end-date"
          onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
          focusedInput={this.state.focusedInput}
          onFocusChange={focusedInput => this.setState({ focusedInput })}
          required = {true}
          withFullScreenPortal = {true}
          orientation = "VERTICAL_ORIENTATION"
        />
      </div>
    );
  }
}
