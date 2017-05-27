import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { createStructuredSelector } from 'reselect';
import { letterTime, caretTime, initialLoad } from './selectors';
import { START_TYPING } from './constants';

export class HelmetText extends Component {
  componentDidMount() {
    if (this.props.initialLoad && window.outerWidth >= 768) {
      const { dispatch } = this.props;
      dispatch({ type: START_TYPING });
    }
  }

  getLetter = (pathId) => {
    const letterCount = this.props.letter;
    if (pathId <= letterCount) {
      return '#FFFFFF';
    }
    return 'none';
  }

  getCaret = (pathId) => {
    const caretCount = this.props.caret;
    if (pathId === caretCount) {
      return '#FFFFFF';
    }
    return 'none';
  }

  render() {
    return (
      <g id="text">
        <g>
          <g>
            <path
              fill={this.getLetter(1)}
              d="M76.81,21.09c-0.548,0.039-0.82,0.059-1.368,0.101c-0.216,1.609-0.324,2.414-0.54,4.024
              c-0.352,0.004-0.529,0.006-0.881,0.011c0.223-1.587,0.337-2.38,0.561-3.966c-0.54,0.044-0.81,0.066-1.35,0.114
              c0.044-0.289,0.064-0.434,0.108-0.723c1.425-0.145,2.137-0.21,3.564-0.328C76.866,20.63,76.848,20.783,76.81,21.09z"
            />
            <path
              fill={this.getLetter(2)}
              d="M78.059,22.003c0.132-0.186,0.283-0.334,0.453-0.446c0.17-0.111,0.354-0.173,0.549-0.184
              c0.174-0.009,0.329,0.012,0.469,0.063c0.139,0.052,0.255,0.14,0.346,0.261s0.154,0.279,0.192,0.474
              c0.039,0.195,0.045,0.432,0.017,0.71c-0.093,0.919-0.138,1.378-0.23,2.297c-0.348,0.001-0.521,0.002-0.868,0.003
              c0.097-0.913,0.145-1.369,0.241-2.281c0.015-0.135,0.011-0.25-0.009-0.345c-0.02-0.096-0.053-0.172-0.102-0.23
              c-0.05-0.058-0.112-0.1-0.187-0.125s-0.161-0.036-0.259-0.031c-0.145,0.006-0.271,0.041-0.382,0.103s-0.208,0.146-0.288,0.251
              c-0.122,1.067-0.186,1.6-0.308,2.667c-0.347,0.002-0.519,0.004-0.865,0.007c0.249-2.074,0.374-3.111,0.623-5.185
              c0.338-0.028,0.506-0.042,0.844-0.068C78.201,20.768,78.153,21.18,78.059,22.003z"
            />
            <path
              fill={this.getLetter(3)}
              d="M82.777,25.175c-0.017-0.048-0.029-0.104-0.039-0.167c-0.009-0.063-0.02-0.198-0.02-0.198
              c-0.006-0.002-0.112,0.118-0.18,0.17s-0.141,0.098-0.221,0.138c-0.079,0.04-0.168,0.07-0.262,0.093s-0.19,0.036-0.297,0.036
              c-0.173,0-0.331-0.029-0.471-0.086s-0.257-0.136-0.352-0.237s-0.163-0.222-0.208-0.361c-0.044-0.14-0.057-0.292-0.041-0.457
              c0.039-0.403,0.198-0.718,0.482-0.945c0.283-0.227,0.685-0.35,1.205-0.361c0.191-0.004,0.29-0.006,0.481-0.01
              c0.008-0.092,0.01-0.138,0.018-0.23c0.016-0.188-0.023-0.336-0.119-0.442s-0.241-0.156-0.438-0.149
              c-0.175,0.005-0.307,0.053-0.395,0.143c-0.088,0.089-0.139,0.207-0.151,0.352c-0.343,0.01-0.516,0.014-0.858,0.025
              c0.016-0.163,0.064-0.318,0.141-0.466c0.076-0.149,0.181-0.28,0.311-0.397c0.131-0.116,0.284-0.209,0.463-0.282
              c0.178-0.072,0.38-0.113,0.603-0.122c0.2-0.008,0.383,0.014,0.551,0.065c0.167,0.052,0.313,0.133,0.431,0.242
              s0.202,0.25,0.26,0.421c0.059,0.171,0.078,0.371,0.061,0.599c-0.054,0.675-0.078,1.013-0.132,1.688
              c-0.017,0.211-0.021,0.385-0.009,0.523s0.038,0.257,0.073,0.356c-0.002,0.025-0.005,0.037-0.007,0.062
              C83.306,25.175,83.13,25.175,82.777,25.175z M82.012,24.476c0.088,0,0.169-0.013,0.246-0.037
              c0.076-0.024,0.147-0.056,0.21-0.095c0.063-0.039,0.117-0.083,0.165-0.133c0.049-0.049,0.086-0.1,0.115-0.15
              c0.022-0.269,0.038-0.402,0.061-0.671c-0.176,0.003-0.266,0.003-0.441,0.006c-0.134,0.002-0.25,0.02-0.348,0.052
              c-0.099,0.032-0.18,0.074-0.244,0.129c-0.065,0.055-0.116,0.12-0.152,0.195c-0.035,0.075-0.058,0.158-0.065,0.246
              c-0.012,0.133,0.02,0.243,0.093,0.33S81.846,24.477,82.012,24.476z"
            />
            <path
              fill={this.getLetter(4)}
              d="M85.571,21.192c0.006,0.221,0.008,0.333,0.014,0.554c0.133-0.202,0.289-0.36,0.466-0.473
              s0.372-0.173,0.578-0.177c0.168-0.003,0.315,0.023,0.451,0.081s0.25,0.15,0.344,0.28c0.094,0.129,0.165,0.296,0.209,0.5
              c0.045,0.205,0.059,0.455,0.041,0.748c-0.058,0.996-0.087,1.494-0.145,2.49c-0.349-0.002-0.521-0.004-0.87-0.007
              c0.062-0.985,0.094-1.477,0.155-2.461c0.01-0.159,0.004-0.289-0.021-0.392c-0.023-0.103-0.062-0.184-0.113-0.243
              c-0.052-0.058-0.116-0.098-0.192-0.12s-0.166-0.033-0.264-0.031c-0.146,0.002-0.271,0.039-0.379,0.111
              c-0.107,0.072-0.197,0.169-0.27,0.293c-0.078,1.135-0.118,1.703-0.197,2.837c-0.349-0.001-0.523-0.003-0.872-0.004
              c0.117-1.586,0.176-2.379,0.293-3.965C85.109,21.205,85.263,21.199,85.571,21.192z"
            />
            <path
              fill={this.getLetter(5)}
              d="M89.703,23.526c-0.165,0.176-0.245,0.264-0.41,0.44c-0.024,0.498-0.038,0.747-0.063,1.244
              c-0.348-0.003-0.52-0.006-0.868-0.009c0.125-2.307,0.186-3.459,0.311-5.765c0.339-0.007,0.505-0.01,0.844-0.015
              c-0.065,1.323-0.098,1.985-0.163,3.309c0.111-0.145,0.168-0.218,0.278-0.363c0.394-0.495,0.585-0.742,0.974-1.24
              c0.41-0.001,0.615-0.001,1.025,0c-0.527,0.684-0.79,1.026-1.325,1.707c0.533,0.957,0.802,1.439,1.348,2.406
              c-0.427-0.006-0.641-0.009-1.067-0.015C90.23,24.543,90.053,24.203,89.703,23.526z"
            />
            <path
              fill={this.getLetter(6)}
              d="M97.501,23.613c0.038,0.178,0.058,0.267,0.096,0.444c0.368-1.126,0.551-1.688,0.909-2.81
              c0.376,0.012,0.565,0.02,0.941,0.034c-0.673,1.867-1.018,2.806-1.723,4.688c-0.039,0.104-0.088,0.215-0.149,0.336
              c-0.061,0.121-0.136,0.232-0.228,0.335c-0.091,0.103-0.204,0.188-0.334,0.257s-0.282,0.1-0.458,0.097
              c-0.043-0.001-0.083-0.003-0.118-0.008c-0.036-0.004-0.069-0.009-0.103-0.017c-0.034-0.006-0.068-0.015-0.101-0.024
              c-0.033-0.01-0.064-0.023-0.103-0.036c0.048-0.323,0.068-0.484,0.116-0.808c0.036,0.001,0.082,0.004,0.138,0.009
              c0.057,0.005,0.102,0.008,0.136,0.009c0.068,0.001,0.129-0.024,0.184-0.073c0.054-0.05,0.101-0.105,0.138-0.166
              c0.038-0.061,0.071-0.116,0.094-0.166c0.023-0.051,0.039-0.075,0.048-0.075c0.086-0.19,0.128-0.286,0.214-0.477
              c-0.556-1.594-0.828-2.393-1.362-3.987c0.373,0.008,0.56,0.012,0.933,0.021C97.058,22.163,97.205,22.646,97.501,23.613z"
            />
            <path
              fill={this.getLetter(7)}
              d="M99.769,23.307c-0.001-0.298,0.032-0.574,0.103-0.826c0.069-0.252,0.169-0.468,0.302-0.65
              c0.134-0.182,0.296-0.323,0.488-0.421c0.192-0.098,0.414-0.141,0.664-0.129c0.249,0.011,0.47,0.074,0.666,0.189
              c0.195,0.114,0.362,0.268,0.5,0.459c0.137,0.192,0.241,0.416,0.315,0.67s0.115,0.53,0.12,0.825
              c0.001,0.031-0.002,0.046-0.001,0.078c0.005,0.297-0.022,0.571-0.088,0.82c-0.066,0.249-0.169,0.465-0.301,0.646
              s-0.296,0.319-0.492,0.417s-0.423,0.145-0.675,0.138c-0.254-0.007-0.479-0.064-0.679-0.174c-0.2-0.11-0.369-0.26-0.507-0.451
              c-0.137-0.191-0.242-0.416-0.313-0.672c-0.071-0.256-0.105-0.536-0.106-0.837C99.766,23.355,99.769,23.339,99.769,23.307z
               M100.626,23.417c0.001,0.172,0.017,0.333,0.044,0.483s0.071,0.284,0.13,0.397c0.06,0.114,0.133,0.206,0.226,0.274
              s0.206,0.104,0.337,0.107c0.127,0.004,0.235-0.024,0.326-0.086s0.162-0.148,0.219-0.258c0.056-0.11,0.096-0.24,0.12-0.388
              s0.038-0.308,0.036-0.479c0-0.032-0.001-0.048-0.001-0.08c-0.002-0.166-0.02-0.323-0.048-0.472
              c-0.028-0.149-0.071-0.28-0.129-0.396c-0.059-0.116-0.134-0.208-0.225-0.277c-0.091-0.07-0.199-0.106-0.328-0.112
              c-0.127-0.005-0.236,0.022-0.326,0.085c-0.09,0.062-0.161,0.147-0.219,0.259c-0.057,0.111-0.1,0.242-0.125,0.389
              c-0.025,0.148-0.037,0.306-0.036,0.472C100.627,23.368,100.626,23.385,100.626,23.417z"
            />
            <path
              fill={this.getLetter(8)}
              d="M105.871,25.025c-0.108,0.195-0.241,0.346-0.398,0.454c-0.158,0.108-0.334,0.158-0.525,0.152
              c-0.176-0.006-0.337-0.043-0.484-0.112c-0.147-0.07-0.275-0.176-0.383-0.32s-0.193-0.327-0.255-0.547s-0.098-0.482-0.104-0.789
              c-0.021-0.956-0.029-1.435-0.05-2.391c0.341,0.019,0.511,0.029,0.852,0.049c0.025,0.954,0.037,1.432,0.063,2.386
              c0.004,0.164,0.018,0.302,0.04,0.414s0.059,0.203,0.104,0.272c0.045,0.07,0.103,0.121,0.174,0.153
              c0.072,0.033,0.159,0.051,0.261,0.055c0.172,0.007,0.311-0.027,0.416-0.101c0.106-0.073,0.185-0.175,0.235-0.308
              c-0.036-1.119-0.054-1.678-0.09-2.797c0.342,0.022,0.512,0.034,0.854,0.057c0.059,1.585,0.09,2.377,0.149,3.962
              c-0.315-0.011-0.473-0.016-0.788-0.027C105.912,25.364,105.898,25.25,105.871,25.025z"
            />
            <path
              fill={this.getLetter(9)}
              d="M72.709,33.149c0.161-1.13,0.24-1.697,0.401-2.828c-0.363-0.026-0.545-0.04-0.908-0.067
              c0.039-0.26,0.06-0.39,0.099-0.65c0.362,0.023,0.543,0.035,0.905,0.058c0.011-0.076,0.016-0.114,0.026-0.19
              c0.032-0.23,0.1-0.431,0.196-0.604c0.098-0.173,0.221-0.318,0.37-0.434c0.15-0.115,0.324-0.201,0.522-0.256
              s0.414-0.079,0.648-0.071c0.074,0.002,0.145,0.007,0.212,0.015c0.067,0.007,0.132,0.017,0.196,0.028
              c0.063,0.011,0.13,0.023,0.195,0.037s0.135,0.028,0.204,0.044c-0.059,0.291-0.09,0.437-0.149,0.727
              c-0.078-0.021-0.167-0.042-0.268-0.06c-0.1-0.018-0.218-0.03-0.356-0.037c-0.275-0.013-0.483,0.041-0.624,0.154
              c-0.141,0.114-0.228,0.282-0.258,0.507c-0.011,0.077-0.015,0.116-0.025,0.193c0.498,0.03,0.747,0.045,1.245,0.074
              c-0.034,0.273-0.054,0.41-0.088,0.683c-0.5-0.034-0.751-0.051-1.25-0.086c-0.155,1.147-0.234,1.721-0.39,2.868
              C73.252,33.212,73.071,33.191,72.709,33.149z"
            />
            <path
              fill={this.getLetter(10)}
              d="M75.932,31.623c0.032-0.265,0.099-0.507,0.199-0.728c0.1-0.221,0.23-0.411,0.39-0.569
              c0.16-0.158,0.343-0.279,0.555-0.363c0.212-0.085,0.448-0.121,0.709-0.107c0.26,0.014,0.485,0.072,0.679,0.181
              c0.192,0.107,0.349,0.252,0.472,0.432c0.122,0.18,0.209,0.391,0.259,0.63c0.049,0.239,0.059,0.497,0.031,0.773
              c-0.003,0.029-0.005,0.044-0.008,0.074c-0.028,0.278-0.092,0.533-0.188,0.762c-0.098,0.229-0.223,0.424-0.381,0.584
              s-0.348,0.279-0.563,0.355s-0.457,0.103-0.72,0.077c-0.265-0.026-0.494-0.099-0.69-0.214c-0.197-0.115-0.356-0.262-0.479-0.443
              c-0.121-0.181-0.206-0.388-0.252-0.621c-0.047-0.233-0.054-0.483-0.021-0.75C75.926,31.666,75.928,31.651,75.932,31.623z
               M76.817,31.765c-0.018,0.155-0.021,0.301-0.008,0.438s0.042,0.261,0.091,0.367c0.05,0.106,0.121,0.195,0.211,0.263
              s0.201,0.107,0.337,0.119c0.132,0.012,0.251-0.007,0.353-0.059s0.186-0.127,0.257-0.225c0.07-0.098,0.127-0.215,0.17-0.351
              s0.071-0.281,0.088-0.439c0.003-0.029,0.006-0.044,0.009-0.073c0.017-0.153,0.018-0.299,0.004-0.438
              c-0.014-0.138-0.046-0.261-0.094-0.368c-0.049-0.108-0.113-0.196-0.201-0.261c-0.088-0.066-0.199-0.103-0.334-0.111
              c-0.133-0.008-0.249,0.016-0.35,0.069c-0.101,0.053-0.188,0.129-0.261,0.228c-0.071,0.099-0.128,0.214-0.171,0.346
              c-0.043,0.132-0.072,0.273-0.09,0.423C76.825,31.723,76.82,31.736,76.817,31.765z"
            />
            <path
              fill={this.getLetter(11)}
              d="M82.691,30.087c0.135,0.006,0.256,0.021,0.369,0.046c0.113,0.025,0.203,0.051,0.271,0.079
              c-0.084,0.401-0.124,0.603-0.209,1.003c-0.115-0.038-0.235-0.068-0.357-0.09s-0.238-0.034-0.351-0.04
              c-0.25-0.013-0.457,0.03-0.617,0.13c-0.16,0.1-0.283,0.246-0.377,0.442c-0.082,0.933-0.124,1.399-0.206,2.332
              c-0.362-0.029-0.543-0.044-0.905-0.074c0.144-1.539,0.213-2.309,0.356-3.848c0.332,0.016,0.496,0.024,0.828,0.039
              c-0.006,0.255-0.008,0.381-0.014,0.636c0.16-0.212,0.345-0.377,0.553-0.495C82.24,30.131,82.458,30.078,82.691,30.087z"
            />
            <path
              fill={this.getLetter(12)}
              d="M89.416,33.287c0.013,0.119,0.017,0.178,0.029,0.297c0.023-0.113,0.037-0.167,0.061-0.28
              c0.362-1.142,0.541-1.716,0.896-2.865c0.372,0.011,0.559,0.015,0.931,0.025c-0.59,1.63-0.89,2.442-1.499,4.057
              c-0.342-0.015-0.513-0.022-0.854-0.038c-0.461-1.658-0.688-2.483-1.128-4.124c0.372,0.013,0.559,0.019,0.931,0.031
              C89.03,31.545,89.159,32.124,89.416,33.287z"
            />
            <path
              fill={this.getLetter(13)}
              d="M92.252,30.488c0.756,0.019,1.134,0.028,1.89,0.044c-0.032,1.307-0.048,1.96-0.081,3.267
              c0.382,0.009,0.57,0.015,0.952,0.022c-0.007,0.345-0.011,0.517-0.018,0.862c-1.153-0.024-1.729-0.04-2.882-0.078
              c0.012-0.344,0.016-0.515,0.027-0.859c0.401,0.013,0.602,0.018,1.003,0.029c0.028-0.959,0.043-1.439,0.071-2.398
              c-0.396-0.01-0.596-0.015-0.992-0.026C92.234,31.006,92.24,30.833,92.252,30.488z M93.207,29.455
              c0.002-0.082,0.017-0.158,0.043-0.227c0.025-0.069,0.063-0.128,0.109-0.176c0.046-0.049,0.103-0.086,0.165-0.113
              c0.063-0.026,0.134-0.04,0.21-0.038c0.156,0.003,0.278,0.059,0.368,0.167c0.09,0.107,0.131,0.244,0.127,0.409
              c-0.004,0.165-0.052,0.299-0.147,0.403c-0.096,0.104-0.221,0.154-0.378,0.15c-0.077-0.001-0.148-0.017-0.211-0.047
              c-0.062-0.029-0.114-0.069-0.157-0.12c-0.043-0.051-0.077-0.111-0.099-0.182C93.215,29.611,93.205,29.536,93.207,29.455z"
            />
            <path
              fill={this.getLetter(14)}
              d="M98.177,33.597c0-0.063-0.013-0.121-0.036-0.169c-0.024-0.048-0.07-0.094-0.133-0.137
              c-0.063-0.042-0.146-0.081-0.253-0.118c-0.104-0.037-0.239-0.073-0.399-0.111c-0.204-0.049-0.395-0.115-0.563-0.189
              c-0.169-0.075-0.312-0.166-0.431-0.271s-0.215-0.225-0.28-0.361s-0.098-0.292-0.095-0.468c0.003-0.17,0.042-0.333,0.113-0.487
              c0.071-0.154,0.172-0.288,0.302-0.403c0.131-0.114,0.285-0.205,0.471-0.271c0.186-0.066,0.393-0.097,0.624-0.093
              c0.241,0.004,0.458,0.041,0.649,0.11c0.192,0.07,0.356,0.166,0.49,0.285s0.233,0.261,0.304,0.424s0.105,0.338,0.105,0.529
              c-0.358-0.003-0.536-0.005-0.895-0.009c0.001-0.16-0.054-0.294-0.162-0.404c-0.108-0.109-0.276-0.166-0.499-0.169
              c-0.209-0.003-0.366,0.04-0.474,0.127c-0.107,0.087-0.159,0.195-0.161,0.326c-0.001,0.061,0.009,0.118,0.03,0.17
              c0.021,0.053,0.055,0.1,0.109,0.143c0.055,0.042,0.13,0.083,0.225,0.118s0.218,0.065,0.362,0.094
              c0.21,0.041,0.404,0.098,0.586,0.163c0.181,0.065,0.338,0.149,0.469,0.251c0.132,0.101,0.233,0.224,0.309,0.368
              c0.074,0.144,0.113,0.315,0.113,0.513c0,0.183-0.04,0.349-0.115,0.502s-0.183,0.286-0.321,0.396s-0.309,0.197-0.505,0.258
              c-0.196,0.061-0.416,0.091-0.658,0.088c-0.267-0.002-0.499-0.046-0.702-0.13s-0.374-0.193-0.509-0.326
              c-0.135-0.134-0.235-0.283-0.304-0.451c-0.067-0.168-0.098-0.335-0.095-0.503c0.345,0.006,0.517,0.008,0.861,0.013
              c0.005,0.112,0.029,0.208,0.073,0.289c0.045,0.081,0.103,0.147,0.174,0.197c0.072,0.051,0.152,0.089,0.245,0.113
              s0.186,0.036,0.283,0.037C97.711,34.042,97.882,34,98,33.917C98.117,33.834,98.176,33.729,98.177,33.597z"
            />
            <path
              fill={this.getLetter(15)}
              d="M100.135,30.628c0.756,0.008,1.137,0.011,1.893,0.016c0.016,1.291,0.022,1.935,0.038,3.225
              c0.382-0.002,0.572-0.003,0.954-0.007c0.006,0.339,0.009,0.508,0.015,0.848c-1.153,0.017-1.732,0.021-2.886,0.023
              c-0.001-0.343,0-0.515-0.001-0.858c0.401,0,0.604,0,1.005-0.001c-0.008-0.951-0.012-1.427-0.02-2.378
              c-0.396-0.002-0.599-0.005-0.995-0.008C100.137,31.143,100.136,30.973,100.135,30.628z M101.051,29.589
              c-0.001-0.081,0.011-0.155,0.035-0.225c0.023-0.069,0.062-0.128,0.105-0.177c0.044-0.049,0.095-0.085,0.156-0.112
              c0.063-0.026,0.134-0.04,0.21-0.039c0.156,0.002,0.281,0.055,0.375,0.161c0.094,0.105,0.141,0.239,0.143,0.402
              c0.002,0.163-0.041,0.296-0.133,0.4c-0.092,0.103-0.216,0.155-0.373,0.153c-0.077,0-0.147-0.016-0.211-0.044
              c-0.063-0.028-0.117-0.068-0.162-0.117c-0.045-0.05-0.081-0.109-0.105-0.179C101.065,29.744,101.052,29.67,101.051,29.589z"
            />
            <path
              fill={this.getLetter(16)}
              d="M105.448,29.676c0.012,0.392,0.018,0.588,0.029,0.98c0.518,0,0.777,0,1.295,0
              c0.011,0.301,0.019,0.449,0.029,0.75c-0.52,0.004-0.782,0.006-1.302,0.009c0.021,0.688,0.029,1.033,0.05,1.721
              c0.004,0.146,0.024,0.265,0.058,0.362c0.032,0.097,0.073,0.174,0.129,0.231c0.056,0.057,0.125,0.096,0.202,0.119
              c0.078,0.023,0.163,0.032,0.259,0.03c0.069-0.001,0.141-0.006,0.213-0.015c0.072-0.009,0.142-0.021,0.208-0.033
              c0.066-0.013,0.128-0.025,0.185-0.039c0.057-0.013,0.105-0.028,0.146-0.041c0.046,0.279,0.067,0.419,0.113,0.697
              c-0.063,0.043-0.134,0.082-0.219,0.115c-0.084,0.033-0.172,0.061-0.268,0.083c-0.096,0.022-0.193,0.039-0.297,0.053
              c-0.103,0.014-0.206,0.023-0.307,0.026c-0.194,0.005-0.372-0.019-0.532-0.073c-0.159-0.054-0.295-0.141-0.411-0.261
              c-0.115-0.12-0.207-0.276-0.272-0.464c-0.066-0.189-0.099-0.415-0.105-0.68c-0.019-0.732-0.029-1.099-0.048-1.832
              c-0.318,0.001-0.474,0.001-0.792,0.001c-0.007-0.306-0.011-0.459-0.018-0.766c0.316,0.001,0.475,0.001,0.791,0.002
              c-0.01-0.395-0.014-0.59-0.023-0.985C104.917,29.673,105.093,29.674,105.448,29.676z"
            />
            <path
              fill={this.getLetter(17)}
              d="M108.02,30.65c0.755-0.003,1.134-0.005,1.889-0.012c0.065,1.222,0.097,1.833,0.162,3.056
              c0.382-0.014,0.572-0.022,0.954-0.038c0.019,0.32,0.027,0.479,0.046,0.799c-1.152,0.057-1.73,0.08-2.884,0.123
              c-0.014-0.328-0.021-0.49-0.034-0.818c0.401-0.012,0.604-0.02,1.005-0.033c-0.044-0.906-0.068-1.358-0.112-2.264
              c-0.396,0.005-0.595,0.009-0.991,0.013C108.039,31.146,108.033,30.979,108.02,30.65z M108.895,29.646
              c-0.004-0.077,0.005-0.147,0.026-0.213c0.021-0.066,0.055-0.122,0.097-0.168c0.042-0.047,0.093-0.083,0.153-0.109
              c0.062-0.026,0.132-0.039,0.208-0.038c0.156,0.001,0.283,0.051,0.381,0.15c0.098,0.099,0.147,0.227,0.156,0.381
              c0.008,0.154-0.029,0.28-0.117,0.379c-0.088,0.099-0.21,0.148-0.367,0.148c-0.077,0-0.147-0.011-0.212-0.038
              c-0.063-0.026-0.119-0.063-0.166-0.11c-0.047-0.047-0.087-0.103-0.113-0.169C108.912,29.794,108.898,29.723,108.895,29.646z"
            />
            <path
              fill={this.getLetter(18)}
              d="M112.528,30.609c0.036,0.208,0.051,0.312,0.087,0.52c0.111-0.19,0.252-0.335,0.422-0.44
              s0.364-0.16,0.579-0.163c0.175-0.002,0.336,0.023,0.485,0.075s0.283,0.137,0.398,0.253c0.115,0.116,0.212,0.266,0.286,0.45
              s0.121,0.408,0.144,0.673c0.075,0.898,0.111,1.347,0.187,2.245c-0.363,0.024-0.545,0.035-0.908,0.058
              c-0.07-0.903-0.104-1.354-0.174-2.257c-0.012-0.146-0.039-0.265-0.078-0.358c-0.038-0.093-0.086-0.167-0.147-0.221
              c-0.062-0.053-0.135-0.089-0.218-0.108s-0.176-0.029-0.278-0.026c-0.152,0.003-0.28,0.038-0.383,0.106
              c-0.103,0.069-0.184,0.161-0.242,0.278c0.074,1.066,0.111,1.601,0.186,2.667c-0.364,0.021-0.546,0.029-0.91,0.049
              c-0.097-1.516-0.146-2.272-0.243-3.789C112.042,30.616,112.206,30.613,112.528,30.609z"
            />
            <path
              fill={this.getLetter(19)}
              d="M115.722,32.338c-0.024-0.273-0.017-0.526,0.028-0.754c0.045-0.229,0.121-0.425,0.229-0.589
              s0.244-0.292,0.408-0.384s0.355-0.139,0.572-0.144c0.202-0.004,0.379,0.028,0.531,0.093s0.285,0.16,0.401,0.283
              c0-0.133,0-0.198,0-0.331c0.323-0.008,0.485-0.013,0.809-0.021c0.149,1.328,0.224,1.992,0.373,3.32
              c0.026,0.232,0.011,0.443-0.051,0.633s-0.163,0.355-0.297,0.495c-0.133,0.14-0.297,0.254-0.497,0.341s-0.429,0.141-0.679,0.165
              c-0.107,0.01-0.222,0.011-0.347,0s-0.25-0.031-0.374-0.066c-0.125-0.035-0.245-0.083-0.358-0.145
              c-0.114-0.063-0.213-0.141-0.298-0.234c0.144-0.238,0.214-0.357,0.356-0.593c0.127,0.123,0.27,0.212,0.422,0.269
              c0.153,0.057,0.313,0.077,0.484,0.063c0.256-0.022,0.451-0.106,0.579-0.253s0.177-0.343,0.15-0.589
              c-0.009-0.08-0.012-0.12-0.021-0.2c-0.095,0.124-0.21,0.223-0.347,0.298c-0.136,0.076-0.295,0.123-0.481,0.137
              c-0.221,0.017-0.422-0.014-0.604-0.092c-0.184-0.078-0.345-0.194-0.483-0.347s-0.251-0.34-0.337-0.56s-0.142-0.461-0.165-0.724
              C115.724,32.38,115.725,32.366,115.722,32.338z M116.629,32.366c0.015,0.149,0.04,0.287,0.082,0.414
              c0.041,0.127,0.097,0.237,0.167,0.328c0.069,0.092,0.154,0.162,0.253,0.209c0.099,0.048,0.21,0.067,0.337,0.059
              c0.158-0.011,0.288-0.048,0.385-0.116c0.096-0.067,0.167-0.156,0.216-0.268c-0.063-0.59-0.09-0.886-0.152-1.476
              c-0.071-0.107-0.163-0.188-0.271-0.244c-0.108-0.056-0.235-0.081-0.387-0.076c-0.127,0.004-0.234,0.035-0.321,0.093
              c-0.086,0.059-0.155,0.138-0.206,0.238c-0.052,0.1-0.085,0.216-0.103,0.348s-0.021,0.271-0.007,0.42
              C116.625,32.324,116.626,32.338,116.629,32.366z"
            />
          </g>
        </g>
        <g id="caret">
          <g>
            <g>
              <path
                fill={this.getCaret(1)}
                d="M75.728,26.667c-1.192,0.038-1.786,0.058-2.978,0.104c0.049-0.197,0.073-0.295,0.122-0.493
                c1.187-0.057,1.779-0.082,2.966-0.128C75.795,26.357,75.771,26.461,75.728,26.667z"
              />
              <path
                fill={this.getCaret(2)}
                d="M79.725,26.559c-1.192,0.026-1.788,0.041-2.98,0.076c0.041-0.21,0.063-0.314,0.104-0.524
                  c1.187-0.043,1.78-0.062,2.967-0.096C79.778,26.233,79.761,26.341,79.725,26.559z"
              />
              <path
                fill={this.getCaret(3)}
                d="M83.721,26.49c-1.192,0.015-1.79,0.024-2.982,0.048c0.034-0.22,0.052-0.331,0.086-0.551
                    c1.187-0.031,1.78-0.044,2.967-0.065C83.763,26.149,83.749,26.263,83.721,26.49z"
              />
              <path
                fill={this.getCaret(4)}
                d="M87.715,26.458c-1.192,0.003-1.791,0.007-2.983,0.02c0.026-0.229,0.041-0.343,0.067-0.572
                      c1.187-0.018,1.78-0.024,2.967-0.032C87.745,26.108,87.735,26.224,87.715,26.458z"
              />
              <path
                fill={this.getCaret(5)}
                d="M91.709,26.464c-1.192-0.007-1.788-0.009-2.98-0.008c0.019-0.235,0.028-0.354,0.047-0.589
                        c1.187-0.005,1.781-0.004,2.968,0C91.729,26.106,91.723,26.225,91.709,26.464z"
              />
              <path
                fill={this.getCaret(6)}
                d="M99.029,26.574c-1.191-0.028-1.788-0.04-2.98-0.06c0.005-0.242,0.009-0.363,0.014-0.604
                          c1.187,0.019,1.778,0.03,2.965,0.059C99.028,26.21,99.028,26.332,99.029,26.574z"
              />
              <path
                fill={this.getCaret(7)}
                d="M103.023,26.688c-1.191-0.04-1.784-0.057-2.977-0.088c-0.002-0.242-0.007-0.363-0.009-0.605
                            c1.187,0.032,1.778,0.05,2.964,0.092C103.01,26.328,103.016,26.447,103.023,26.688z"
              />
              <path
                fill={this.getCaret(8)}
                d="M107.014,26.843c-1.191-0.052-1.786-0.076-2.978-0.119c-0.01-0.241-0.016-0.36-0.025-0.601
                              c1.186,0.045,1.775,0.071,2.961,0.126C106.987,26.487,106.998,26.605,107.014,26.843z"
              />
              <path
                fill={this.getCaret(9)}
                d="M73.969,35.08c-1.281-0.11-1.921-0.167-3.201-0.287c0.049-0.197,0.073-0.294,0.122-0.492
                                c1.275,0.11,1.913,0.162,3.189,0.262C74.036,34.77,74.012,34.873,73.969,35.08z"
              />
              <path
                fill={this.getCaret(10)}
                d="M78.267,35.425c-1.282-0.096-1.924-0.148-3.206-0.254c0.041-0.21,0.063-0.314,0.104-0.524
                                  c1.276,0.098,1.916,0.146,3.193,0.234C78.321,35.099,78.303,35.208,78.267,35.425z"
              />
              <path
                fill={this.getCaret(11)}
                d="M82.565,35.723c-1.283-0.082-1.925-0.126-3.208-0.219c0.034-0.22,0.052-0.331,0.086-0.551
                                    c1.277,0.085,1.916,0.125,3.194,0.202C82.609,35.382,82.594,35.496,82.565,35.723z"
              />
              <path
                fill={this.getCaret(12)}
                d="M90.235,36.14c-1.284-0.057-1.927-0.088-3.211-0.156c0.021-0.234,0.032-0.352,0.053-0.585
                                      c1.279,0.063,1.917,0.093,3.195,0.147C90.258,35.783,90.25,35.902,90.235,36.14z"
              />
              <path
                fill={this.getCaret(13)}
                d="M94.54,36.307c-1.284-0.043-1.926-0.067-3.21-0.121c0.013-0.239,0.018-0.358,0.03-0.597
                                        c1.278,0.051,1.919,0.073,3.197,0.114C94.551,35.945,94.547,36.066,94.54,36.307z"
              />
              <path
                fill={this.getCaret(14)}
                d="M98.84,36.428c-1.285-0.029-1.927-0.046-3.211-0.085c0.005-0.242,0.01-0.361,0.015-0.603
                                          c1.279,0.038,1.918,0.055,3.197,0.083C98.841,36.065,98.84,36.186,98.84,36.428z"
              />
              <path
                fill={this.getCaret(15)}
                d="M103.148,36.5c-1.285-0.015-1.929-0.024-3.214-0.049c-0.002-0.242-0.004-0.364-0.006-0.606
                                            c1.279,0.025,1.918,0.036,3.197,0.052C103.134,36.139,103.141,36.259,103.148,36.5z"
              />
              <path
                fill={this.getCaret(16)}
                d="M107.45,36.524c-1.285,0-1.924-0.002-3.209-0.013c-0.01-0.241-0.016-0.36-0.025-0.601
                                              c1.279,0.013,1.917,0.017,3.196,0.02C107.428,36.168,107.435,36.286,107.45,36.524z"
              />
              <path
                fill={this.getCaret(17)}
                d="M111.76,36.5c-1.285,0.015-1.93,0.02-3.215,0.023c-0.018-0.237-0.024-0.356-0.042-0.593
                                                c1.279,0,1.921-0.002,3.2-0.012C111.727,36.151,111.736,36.268,111.76,36.5z"
              />
              <path
                fill={this.getCaret(18)}
                d="M116.063,36.428c-1.285,0.029-1.928,0.041-3.213,0.059c-0.025-0.231-0.037-0.346-0.063-0.577
                                                  c1.279-0.013,1.918-0.022,3.197-0.045C116.016,36.09,116.031,36.203,116.063,36.428z"
              />
              <path
                fill={this.getCaret(19)}
                d="M120.369,36.306c-1.285,0.043-1.928,0.063-3.213,0.096c-0.033-0.223-0.049-0.334-0.082-0.558
                                                    c1.279-0.026,1.918-0.042,3.197-0.078C120.311,35.982,120.33,36.09,120.369,36.306z"
              />
            </g>
          </g>
        </g>
      </g>
    );
  }
}

HelmetText.propTypes = {
  dispatch: PropTypes.func.isRequired,
  letter: PropTypes.number.isRequired,
  caret: PropTypes.number.isRequired,
  initialLoad: PropTypes.bool.isRequired,
};

/* Alternative way to use selectors
 * see seletors.js
*/

// const mapStateToProps = (state) => {
//   return {
//     caret: caretTime(state),
//   };
// };

const mapStateToProps = createStructuredSelector({
  caret: caretTime(),
  letter: letterTime(),
  initialLoad: initialLoad(),
});

export default connect(mapStateToProps)(HelmetText);
