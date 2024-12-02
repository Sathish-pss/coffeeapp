/**
 * @returns Function to group the data based on categories
 */
export const getCategoriesFromData = (data: any) => {
    let temp: any = {};
    for (let i = 0; i < data.length; i++) {
      if (temp[data[i].name] == undefined) {
        temp[data[i].name] = 1;
      } else {
        temp[data[i].name]++;
      }
    }
    let categories = Object.keys(temp);
    categories.unshift('All');
    return categories;
  };