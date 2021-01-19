import React from 'react'

function Equipos() {
    const correo= "christian17zxe@gmail.com"
    const nombre= "Christian Escobar"
    const cargo= "Front End Developer"
    const area= "Experiencia Digital"
    return (
        <div> 
            <header className="bg-white shadow">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold leading-tight text-gray-900">
                Equipos
            </h1>
            </div>
        </header>
        <main>
            <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
            {/* Replace with your content */}
            <div className="flex flex-col">
  <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
    <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
      <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Nombre
              </th>
              <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Cargo
              </th>
              <th scope="col" className="relative px-6 py-3">
                <span className="sr-only">Contacto</span>
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            <tr>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="flex items-center">
                  <div className="flex-shrink-0 h-10 w-10">
                    <img className="h-10 w-10 rounded-full" src="https://lh3.googleusercontent.com/fife/ABSRlIplfQcgQ9FzfkNuudDkPC40xrNBMCz2qH_ZjEhBa0alXqazj8DBMHZQnwGC4zasRmXgEOdNEhadd5Dcj7Z2Rs2tujYLmuN3itiWfkSJar4KV2pSe-DYk8hhL6wUvYcI1TInVdbsvASVnPxa1FjW3rEkd4bGMX91QiPWdU4EFsLX1Dcm-ivQGnw1FidlsALVdU6AfTsZ4Xx6M_3wDKcB48Vte8jeNB1blnZFYIiJvFvGElV2GOvoQHzEOMVeVg_m-LjApLri5JiP9F1ftaaflC0vMM_8Xb3tnNV5l6J9ZP28rlcUoAfPJfW9wkJjDt-4d-hNjVxaKgYCQXzOB-TPiY01WKt8OuC6DsIv_ZdkqJi1P3JTyeQ0fgkolb24mWkPGGeMgejs-7SLep7w89yFTOZA4x9ZhIMYXz-LeJZwmGXXuKc1Jts9c_a3u_aScCKKajyVrWgqVzN274_WESY4P7NqaiG5VfZiqWl5Yu6a_m1rSB2kewhxbEOi6dRJAu8Aw0i5seuB4WWpYjhFY7mB1_8_HQc189NPdmqWFje5aze0vYboEL532qRVLkgpQtpdusRMcKrOLETTuR1SBlvTyjuvn0z1W4fu17R_6mbx86eW6-8ViHy4i-PFX2mWiGDWr6puy9RMoQsdCoVr8H3pFX8CHpH9cVJ8X0OGXz7-WtFu0xCVKPKjwXSpKR4DiwTuvIegdnCrUCa6bDeZtFnEcLIGveZNdcvYdyPTyyiPZYL9_Q=s83-c" alt="" />
                  </div>
                  <div className="ml-4">
                    <div className="text-sm font-medium text-gray-900">
                      {nombre}
                    </div>
                    <div className="text-sm text-gray-500">
                      {correo}
                    </div>
                  </div>
                </div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                <div className="text-sm text-gray-900">{cargo}</div>
                <div className="text-sm text-gray-500">{area}</div>
              </td>
              <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                <a href={`mailto:${correo}`} className="text-indigo-600 hover:text-indigo-900">Contactar</a>
              </td>
            </tr>
            {/* More items... */}
          </tbody>
        </table>
      </div>
    </div>
  </div>
</div>

            {/* /End replace */}
            </div>
        </main>
      </div>
    )
}

export default Equipos
