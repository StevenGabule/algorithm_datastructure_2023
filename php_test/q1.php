<?php

function sortByPriceAscending($json)
{
  // Decode the input JSON string into an array of associative arrays
  $items = json_decode($json, true);

  // Define a comparison function for sorting by price and name
  $cmp = function ($a, $b) {
    if ($a['price'] == $b['price']) {
      return strcmp($a['name'], $b['name']);
    } else {
      return ($a['price'] < $b['price']) ? -1 : 1;
    }
  };

  // Sort the items using the comparison function
  usort($items, $cmp);

  // Encode the sorted array back into a JSON string and return it
  return json_encode($items);
}
print_r(sortByPriceAscending('[{"name":"eggs","price":1},{"name":"coffee","price":9.99},{"name":"rice","price":4.04}]'));