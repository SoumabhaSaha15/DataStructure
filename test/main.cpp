#include <iostream>
#include "./../CPP/LinkedList.cpp"
auto main() -> int
{
  namespace DSA = DataStructureAndAlgorithm ;
  auto *testList = new DSA::LinkedList<int>();
  (*testList).Insert(10);
  (*testList).Insert(11);
  (*testList).Insert(12);
  (*testList).Insert(13);
  (*testList).Insert(14);
  (*testList).Insert(15);
  (*testList).ForEach([](int item,size_t index){
    std::cout <<index <<")." <<item  <<std::endl;
  });
  try
  {
    std::cout<<testList->At(20);
  }
  catch(const std::exception& e)
  {
    std::cerr << e.what() << '\n';
  }
  
  return 0;
}