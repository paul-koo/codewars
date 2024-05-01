// PaginationHelper
// For this exercise you will be strengthening your page-fu mastery. You will complete the PaginationHelper class, which is a utility class helpful for querying paging information related to an array.

// The class is designed to take in an array of values and an integer indicating how many items will be allowed per each page. The types of values contained within the collection/array are not relevant.

// The following are some examples of how this class is used:

// var helper = new PaginationHelper(['a','b','c','d','e','f'], 4);
// helper.pageCount(); // should == 2
// helper.itemCount(); // should == 6
// helper.pageItemCount(0); // should == 4
// helper.pageItemCount(1); // last page - should == 2
// helper.pageItemCount(2); // should == -1 since the page is invalid

// // pageIndex takes an item index and returns the page that it belongs on
// helper.pageIndex(5); // should == 1 (zero based index)
// helper.pageIndex(2); // should == 0
// helper.pageIndex(20); // should == -1
// helper.pageIndex(-10); // should == -1

class PaginationHelper {
    constructor(collection, itemsPerPage) {
      this.collection = collection;
      this.itemsPerPage = itemsPerPage;
      // The constructor takes in an array of items and a integer indicating how many
      // items fit within a single page
    }
    itemCount() {
      // returns the number of items within the entire collection
      return this.collection.length;
    }
    pageCount() {
      // returns the number of pages
      return Math.ceil(this.collection.length / this.itemsPerPage);
    }
    pageItemCount(pageIndex) {
      // returns the number of items on the current page. page_index is zero based.
      // this method should return -1 for pageIndex values that are out of range
      if (pageIndex < 0) return -1;
      const pagesIndex = pageIndex;
      const arr = this.collection;
      const size = this.itemsPerPage;
      let result = [];
      for (let i = 0; i < Math.ceil(arr.length / size); i++) {
        result[i] = arr.slice(i * size, i * size + size);
      }
      if (result.length <= pageIndex) {
        return -1;
      }
      this.pageArr = result;
      return result[pagesIndex].length;
    }
    pageIndex(itemIndex) {
      // determines what page an item is on. Zero based indexes
      // this method should return -1 for itemIndex values that are out of range
      if (itemIndex < 0) return -1;
      if (itemIndex >= this.collection.length) return -1;
      let result = 0;
      for (let i = 0; i < this.pageCount(); i++) {
        if (itemIndex +1  > i * this.itemsPerPage + this.itemsPerPage) {
          result = i + 1;
        }
      }
  
      return result;
    }
  }