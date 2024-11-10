export default function () {
  return (
    <div className='MuiContainer-root MuiContainer-maxWidthLg MuiContainer-disableGutters css-5csqms'>
      <div className='MuiBox-root css-1l4w6pd'>
        <iframe
          width='1200'
          height='675'
          src='https://www.youtube.com/embed/aprDbNgFpQg'
          title='Canopy video'
          frameBorder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
          allowFullScreen
        ></iframe>
      </div>
      <h2 className='MuiTypography-root MuiTypography-h2 css-1y6j44e'>
        Gallery
      </h2>
      <ul
        className='MuiImageList-root MuiImageList-quilted css-tidt1y'
        style={{ gridTemplateColumns: 'repeat(2, 1fr)', gap: '8px' }}
      >
        <li
          className='MuiImageListItem-root MuiImageListItem-quilted css-eieajt'
          style={{
            height: 'auto',
            gridColumnEnd: 'span 1',
            gridRowEnd: 'span 1',
          }}
        >
          <img
            src='/canopy/static/media/WhiteParty2.c21f0024.jpg?w=592&fit=crop&auto=format'
            srcSet='/canopy/static/media/WhiteParty2.c21f0024.jpg?w=592&fit=crop&auto=format&dpr=2 2x'
            alt='A magnetic centerpiece'
            loading='lazy'
            className='MuiImageListItem-img'
          />
          <div className='MuiImageListItemBar-root MuiImageListItemBar-positionBottom css-dgyimw'>
            <div className='MuiImageListItemBar-titleWrap MuiImageListItemBar-titleWrapBottom css-1no2hqi'>
              <div className='MuiImageListItemBar-title css-1w4d4gp'>
                A magnetic centerpiece
              </div>
              <div className='MuiImageListItemBar-subtitle css-1uh7tqr'>
                Delight crowds with a massive light installation
              </div>
            </div>
          </div>
        </li>
        <li
          className='MuiImageListItem-root MuiImageListItem-quilted css-eieajt'
          style={{
            height: 'auto',
            gridColumnEnd: 'span 1',
            gridRowEnd: 'span 3',
          }}
        >
          <img
            src='/canopy/static/media/PricelessOverheadGlow.3feaff4a.jpg?w=592&fit=crop&auto=format'
            srcSet='/canopy/static/media/PricelessOverheadGlow.3feaff4a.jpg?w=592&fit=crop&auto=format&dpr=2 2x'
            alt='Massive art'
            loading='lazy'
            className='MuiImageListItem-img'
          />
          <div className='MuiImageListItemBar-root MuiImageListItemBar-positionBottom css-dgyimw'>
            <div className='MuiImageListItemBar-titleWrap MuiImageListItemBar-titleWrapBottom css-1no2hqi'>
              <div className='MuiImageListItemBar-title css-1w4d4gp'>
                Massive art
              </div>
              <div className='MuiImageListItemBar-subtitle css-1uh7tqr'>
                Sixteen feet wide, with over fourteen thousand LEDs, the Canopy
                is an enormous draw
              </div>
            </div>
          </div>
        </li>
        <li
          className='MuiImageListItem-root MuiImageListItem-quilted css-eieajt'
          style={{
            height: 'auto',
            gridColumnEnd: 'span 1',
            gridRowEnd: 'span 1',
          }}
        >
          <img
            src='/canopy/static/media/UnSCruzBlueSolo.4e1fdbc6.jpg?w=592&fit=crop&auto=format'
            srcSet='/canopy/static/media/UnSCruzBlueSolo.4e1fdbc6.jpg?w=592&fit=crop&auto=format&dpr=2 2x'
            alt='Entrancingly beautiful'
            loading='lazy'
            className='MuiImageListItem-img'
          />
          <div className='MuiImageListItemBar-root MuiImageListItemBar-positionBottom css-dgyimw'>
            <div className='MuiImageListItemBar-titleWrap MuiImageListItemBar-titleWrapBottom css-1no2hqi'>
              <div className='MuiImageListItemBar-title css-1w4d4gp'>
                Entrancingly beautiful
              </div>
              <div className='MuiImageListItemBar-subtitle css-1uh7tqr'>
                People love watching the subtle play of patterns across the
                piece
              </div>
            </div>
          </div>
        </li>
      </ul>
      <h2 className='MuiTypography-root MuiTypography-h2 css-1y6j44e'>
        Simulator
      </h2>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <canvas
          style={{
            display: 'block',
            width: '1200px',
            height: '1200px',
            cursor: 'pointer',
            touchAction: 'none',
          }}
          data-engine='three.js r135'
          width='2880'
          height='2880'
        ></canvas>
      </div>
      <img src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAR8AAABaCAYAAACBtVImAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAABL5SURBVHhe7Z27jhxFFIbHfgnAIBKHOOIS4AwegGuKZJMTAoInwMIQAREBF5FiwC9AiASGyIROkPDCSyzUVzv/+J+z1beZ2e3Z3fNJRz1dXV116naqumb6zKXFYvFfkSRJklPl8vKYJElyqqTxSZJkFtL4JEkyC2l8kiSZhTQ+SZLMQhqfJElmIY1PkiSzkMYnSZJZSOOTJMkspPFJkmQWTsz48Ctd/fI1SZIksncrH36Wr5/PI/6qgQyaC78Sjvh1XuEYgjT8HnSIxLxdr3i/i8eL+Oslklbegne1iNP12oLek2ql4TryOd+JSvYBlie9UjrrZKdNZdCVfl56euNal+BkirzKwGheJ02ut65JDg8P1xxaxfMopInovAzgeo+HycnYzaWDq3jeEhx89ZUFKcZndL1KL+hKk/qDmCZ6kFfXeUrKTNIMXBM660kbnzGGBR364rSuu3dCD+8TBjGDU/e0PPRxvW8ARwPWkin1Slzy6yqL6i+m2WoHGTKOHp6ScprS+9jFMr500vryo7zYlY69vNr/iBQpA6f5iCTwGTzmzXHcNnSBT5uYhjzyUZZN4D7Kz9vtR2P4CN6oxrtfC+oFX0XuGbGLMd4eSY9y9/kT4m1zfBdF8MGDPyNHb6/jITBJ5uSYRYrSmqHjYwWzKGi2jzMuszbxdR4FeIxx4spCM7/w/JWG8nfpCu8SX7XEcki6whEYk1+EOo6rGs+naxXnK7PYVq22Q1qruZSU05SNN5xZCfFvFUfj4mg2ZYbt8naHs6wuVxFaleDVrwyGlcjhlSANvw5lENXjriiDdfSqpUUxFtUtxhjHY14W/PFQp+4QjHphRcO1LlhRUgdDvqWTZN/YyPjIWOBMig4vcR/Em4CzKgenW33eDTFmuNdkwG8LZeIRk8eb6Gx+CmMfHyMYb8rv5aV+Cety8oWh4tEPR2lJctbY6qt2n7klLb/DQ3QNrjH7IQ4rjqtXry7PjpChjP/G4GC8GOitfxHFfzDnSkeQD/k5xGntD22CVnzuOVCrMYwk11ntkB/niuP7c7RHl2tT4lG/xEuSuaD39Upr38D3RVriexVjpJWH9pU8zKUM' />
    </div>
  );
}
