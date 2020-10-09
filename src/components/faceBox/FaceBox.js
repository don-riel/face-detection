import React from 'react';

import './faceBox.css'

const calculateFaceLocation = (item) => {
    const location = item.region_info.bounding_box //coordinates of the faces
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height =  Number(image.height);
    return {
      leftCol: location.left_col * width,
      topRow: location.top_row * height,
      rightCol: width - (location.right_col * width),
      bottomRow: height - (location.bottom_row *  height)
    }
  }

const FaceBox = ({data}) => (
    data.map(item => { 
            const dotLocations = calculateFaceLocation(item);
            return (
                <div
                    className='bounding-box'
                    style= {{
                        top: dotLocations.topRow,
                        right: dotLocations.rightCol,
                        bottom: dotLocations.bottomRow,
                        left: dotLocations.leftCol
                    }}
                    key = {item.id}
                >
                </div>
            )
        }
    )
)
   
export default FaceBox;


