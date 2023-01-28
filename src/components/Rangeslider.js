// import React, { useState } from 'react'
// import InputRange from 'react-input-range';
// import { Range,getTrackBackground } from 'react-range';


// const Rangeslider = () => {

//     const STEP = 0.1;
//     const MIN = 0;
//     const MAX = 100;
//     const [value,setValue] = useState([50])
 
//   return (
//     <div
//         style={{
//           display: "flex",
//           justifyContent: "center",
//           flexWrap: "wrap",
//           margin: "2em"
//         }}
//       >
//         <Range
//           value={value}
//           step={STEP}
//           min={MIN}
//           max={MAX}
//           onChange={(value) => setValue(value)}
//           renderTrack={({ props, children }) => (
//             <div
//               onMouseDown={props.onMouseDown}
//               onTouchStart={props.onTouchStart}
//               style={{
//                 ...props.style,
//                 height: "36px",
//                 display: "flex",
//                 width: "100%"
//               }}
//             >
//               <div
//                 ref={props.ref}
//                 style={{
//                   height: "5px",
//                   width: "100%",
//                   borderRadius: "4px",
//                   background: getTrackBackground({
//                     value: value,
//                     colors: ["#548BF4", "#ccc"],
//                     min: MIN,
//                     max: MAX
//                   }),
//                   alignSelf: "center"
//                 }}
//               >
//                 {children}
//               </div>
//             </div>
//           )}
//             renderThumb={({ props, isDragged }) => (
//             <div
//             {...props}
//             style={{
//             ...props.style,
//             height: "42px",
//             width: "42px",
//             borderRadius: "4px",
//             backgroundColor: "#FFF",
//             display: "flex",
//             justifyContent: "center",
//             alignItems: "center",
//             boxShadow: "0px 2px 6px #AAA"
//             }}
//             >
//             <div
//                 style={{
//             height: "16px",
//             width: "5px",
//             backgroundColor: isDragged ? "#548BF4" : "#CCC"
//             }}
//             ></div>
//         </div>
//   )}
// />
//         <output style={{ marginTop: "30px" }} id="output">
//           {value[0].toFixed(1)}
//         </output>
//       </div>
//     );
    
//   }



// export default Rangeslider


import React from "react";
import ReactDOM from "react-dom";
import { Range, getTrackBackground } from "react-range";
import { useDispatch } from "react-redux";

const STEP = 1;
const MIN = 1990;
const MAX = 2022;
// const dispatch = useDispatch()
// dispatch({type:"VALUE", payload:{values}})
class Rangeslider extends React.Component {
  state = {
    values: [2010]
  };
  

  render() {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          margin: "2em"
        }}
      >
        <Range
          values={this.state.values}
          step={STEP}
          min={MIN}
          max={MAX}
          onChange={(values) => this.setState({ values })}
          renderTrack={({ props, children }) => (
            <div
              onMouseDown={props.onMouseDown}
              onTouchStart={props.onTouchStart}
              style={{
                ...props.style,
                height: "36px",
                display: "flex",
                width: "100%"
              }}
            >
              <div
                ref={props.ref}
                style={{
                  height: "5px",
                  width: "100%",
                  borderRadius: "4px",
                  background: getTrackBackground({
                    values: this.state.values,
                    colors: ["#548BF4", "#ccc"],
                    min: MIN,
                    max: MAX
                  }),
                  alignSelf: "center"
                }}
              >
                {children}
              </div>
            </div>
          )}
          renderThumb={({ props, isDragged }) => (
            <div
              {...props}
              style={{
                ...props.style,
                height: "42px",
                width: "42px",
                borderRadius: "4px",
                backgroundColor: "#FFF",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                boxShadow: "0px 2px 6px #AAA"
              }}
            >
              <div
                style={{
                  height: "16px",
                  width: "5px",
                  backgroundColor: isDragged ? "#548BF4" : "#CCC"
                }}
              />
            </div>
          )}
        />
        <output style={{ marginTop: "30px" }} id="output">
          <h1>{this.state.values[0].toFixed(1)}</h1>
        </output>
      </div>
    );
  }
}

export default Rangeslider























// const Rangeslider = ({ min, max, step, price, onChange }) => {
// return (
//     <Range
//     draggableTrack 
//     step={step} 
//     min={min}
//     max={max}
//     values={price} 
//     onChange={onChange}
//     renderTrack={ ({ props, children }) => (
//         <StyledRangeTrack {...props} min={min} max={max} price={price}>
//             {children}
//         </StyledRangeTrack>
//     )}
//     renderThumb={({ props }) => <StyledRangeThumb {...props} />}
//     />
// )
//     }
// const StyledRangeTrack = styled.div`
//     position: relative;
//     height: 5px;
//     width: 100%;
//     border-radius: 4px;
//     margin-top: 1.5rem;
//     background: ${props=>
//         getTrackBackground ({
//         values: props.price,
//         colors: ['#ccc', '#ccc', '#ccc' ],
//         min: props.min, 
//         max: props. max,
//         })};
//     align-self: center;
//     cursor: default ! important;
// `
 
// const StyledRangeThumb = styled.div`
//     position: absolute;
//     top: 0;
//     width: 24px;
//     height: 24px;
//     border-radius: 24px;
//     box-shadow: rgba(157, 157, 157, 0.2) Opx 2px 5px 0px;
//     border: 1px solid rgb(237, 237, 237);
//     background-color: rgb(255, 255, 255); 
//     backface-visibility: hidden;
//     outline: none;
//     cursor: default !important:
    
// `
// export default Rangeslider;