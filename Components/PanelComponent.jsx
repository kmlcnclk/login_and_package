import React, { Component } from 'react';
import { deleteUserFromLocal } from '../LocalStorage/userLocalStorage';
import Header from './Header';

class PanelComponent extends Component {
  state = {
    results: [],
  };
  componentDidMount = async () => {
    await this.setState({ results: this.props.results });
  };

  logout = async () => {
    await deleteUserFromLocal();

    await this.props.router.push('/');
  };
  deletePackage = async (id) => {
    let res = await this.state.results;

    for (let i = 0; i < res.length; i++) {
      if (res[i].id == id) {
        await res.splice(i, 1);
        await this.setState({ results: res });
      }
    }
  };

  render() {
    const listItem = [
      { i: 'Anasayfa', active: true },
      { i: 'Kullanıcılar', active: false },
      { i: 'Paketler', active: false },
    ];
    const { results } = this.state;
    const { errorState, errorValue, setErrorState } = this.props;

    return (
      <div className="mx-3 md:w-5/6 flex md:mx-auto flex-col">
        <Header />
        {errorState ? (
          <div className="flex justify-center items-center">
            <div
              onClick={() => setErrorState(false)}
              className="bg-red-500 cursor-pointer text-white text-center mx-6 p-5 sm:w-96 w-60 rounded-lg opacity-90 my-3 mb-0 shadow-lg hover:shadow-xl"
            >
              <p className="font-semibold text-lg text-center">{errorValue}</p>
            </div>
          </div>
        ) : null}
        <div className="w-full h-20 rounded-lg mt-7 hover:shadow-xl bg-gray-200 font-semibold text-gray-800 shadow-lg">
          <div className=" hover:shadow-md p-2 py-6 sm:p-7  w-1/3 h-20 inline-block cursor-pointer text-lg bg-gray-300 text-center hover:bg-gray-300 rounded-lg transition-colors">
            Menu 1
            <div className=" hidden text-xs md:inline rounded-full text-center text-white p-1 ml-7 bg-red-500">
              27
            </div>
          </div>
          <div className=" hover:shadow-md p-2 py-6 sm:p-7 inline-block justify-center  w-1/3 h-20  cursor-pointer text-lg text-center hover:bg-gray-300 rounded-lg transition-colors">
            Menu 2
          </div>
          <div className="hover:shadow-md p-2 py-6 sm:p-7 w-1/3 h-20 inline-block cursor-pointer text-lg hover:bg-gray-300 rounded-lg transition-colors text-center">
            Menu 3
          </div>
        </div>

        <div className="mt-7 flex justify-center h-auto lg:flex-row flex-col">
          <div className="block lg:block xl:block 2xl:block sm:flex md bg-gray-200 h-auto w-full lg:h-56 shadow-lg mr-0 lg:mr-5 hover:shadow-2xl lg:w-1/6 rounded-lg">
            {listItem.map((l, i) => (
              <div
                key={i}
                className={`${
                  l.active
                    ? 'hover:bg-gray-400 hover:text-white bg-gray-300'
                    : 'hover:bg-gray-300 bg-gray-200'
                }  hover:shadow-xl text-center lg:text-left shadow-lg block  2xl:block sm:inline xl:block lg:block 2xl:w-full xl:w-full lg:w-full sm:w-1/4 w-full  px-8 py-4 cursor-pointer rounded-lg transition-colors text-gray-800 font-semibold text-base`}
              >
                {l.i}
              </div>
            ))}
            <div
              onClick={this.logout}
              className=" hover:shadow-xl shadow-lg text-center lg:text-left 2xl:block sm:inline xl:block lg:block 2xl:w-full xl:w-full lg:w-full sm:w-1/4 w-full px-8 py-4 font-semibold text-base cursor-pointer transition-colors bg-red-400 rounded-lg lg:rounded-b-lg opacity-95 hover:bg-red-500 text-white"
            >
              Çıkış
            </div>
          </div>
          <div className="rounded-lg p-3 mb-5 mt-7 h-auto lg:mt-0 bg-gray-200 mx-auto lg:ml-5 w-full lg:w-5/6 shadow-lg hover:shadow-xl">
            <table className="rounded-3xl shadow-lg table-auto w-full border border-indigo-200 bg-gray-100">
              <thead className="border shadow-xl border-indigo-200 text-gray-700 bg-indigo-300 bg-opacity-70">
                <tr className="h-10">
                  <th className="w-1/4">Name</th>
                  <th className="w-1/4">Price</th>
                  <th className="w-1/4">Limit</th>
                  <th className="w-1/4">İşlem</th>
                </tr>
              </thead>
              <tbody>
                {results.map((r, i) => (
                  <tr
                    key={i}
                    className={`h-10 ${
                      i % 2 == 0 ? 'bg-gray-200' : 'bg-gray-100'
                    } hover:bg-gray-300 border hover:shadow-lg border-indigo-100 text-center text-gray-800 opacity-80`}
                  >
                    <td>{r.name}</td>
                    <td>{r.price}</td>
                    <td>{r.limit}</td>
                    <td
                      onClick={() => this.deletePackage(r.id)}
                      className="bg-yellow-50 cursor-pointer hover:bg-yellow-100 hover:underline text-black opacity-100"
                    >
                      Sil
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default PanelComponent;
