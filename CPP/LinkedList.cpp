#include "LinkedList.hpp"
namespace DataStructureAndAlgorithm
{
  template <typename Type>
  inline LinkedList<Type>::Node::Node(Node *Left, Type Data, Node *Right)
      : Data(Data), Left(Left), Right(Right)
  {
  }
  template <typename Type>
  inline void LinkedList<Type>::Insert(Type Data)
  {
    if (!this->Size())
    {
      this->Front = new Node(nullptr, Data, nullptr);
      this->Rear = this->Front;
      this->Length++;
    }
    else
    {
      Node *NewNode = new Node(this->Rear, Data, nullptr);
      this->Rear->Right = NewNode;
      this->Rear = NewNode;
      this->Length++;
    }
  }
  template <typename Type>
  inline size_t LinkedList<Type>::Size()
  {
    return this->Length;
  }
  template <typename Type>
  inline void LinkedList<Type>::Delete(int Index)
  {
    if (Index < this->Size() && Index >= 0)
    {
      if (Index == 0)
      {
        Node *Temp = this->Front;
        this->Front = this->Front->Right;
        if (this->Front != nullptr)
          this->Front->Left = nullptr;
        delete Temp;
      }
      else if (Index == this->Length)
      {
        Node *Temp = this->Rear;
        this->Rear = this->Rear->Left;
        if (this->Rear != nullptr)
          this->Rear->Right = nullptr;
        delete Temp;
      }
      else
      {
        Node *Last, *Current = this->Front;
        for (int i = Index; i > 0; i--)
          Current = Current->Right;
        Last = Current->Left;
        Last->Right = Current->Right;
        delete Current;
      }
      this->Length--;
    }
    else
    {
      std::cout << std::endl
                << "invalid index!!!" << std::endl;
    }
  }
  template <typename Type>
  inline void LinkedList<Type>::ForEach(const std::function<void(Type)> &Lambda)
  {
    for (Node *Current = this->Front; Current; Current = Current->Right)
      Lambda(Current->Data);
  }
  template <typename Type>
  inline void LinkedList<Type>::ForEach(const std::function<void(Type, int)> &Lambda)
  {
    int index(0);
    for (Node *Current = this->Front; Current; Current = Current->Right, index++)
      Lambda(Current->Data, index);
  }
  template <typename Type>
  inline void LinkedList<Type>::ForEach(const std::function<void(Type, int, LinkedList<Type>)> &Lambda)
  {
    int index(0);
    for (Node *Current = this->Front; Current; Current = Current->Right, index++)
      Lambda(Current->Data, index, *this);
  }
  template <typename Type>
  inline void LinkedList<Type>::Sort(const std::function<bool(Type, Type)> &Lambda)
  {
    for (int i(0); i < this->Length; i++)
    {
      for (Node *Current = this->Front; (Current); Current = Current->Right)
      {
        if (Current->Right)
        {
          if (Lambda(Current->Data, Current->Right->Data))
          {
            Type Hold = Current->Data;
            Current->Data = Current->Right->Data;
            Current->Right->Data = Hold;
          }
        }
      }
    }
  }
  template <typename Type>
  inline void LinkedList<Type>::ClearList()
  {
    for (int i(this->Length - 1); i >= 0; i--)
      this->Delete(i);
  }
  template <typename Type>
  template <typename ConvertType>
  inline LinkedList<ConvertType> LinkedList<Type>::Form(const std::function<ConvertType(Type, int)> &Lambda)
  {
    LinkedList<ConvertType> *list = new LinkedList<ConvertType>();
    int index(0);
    for (Node *Current = this->Front; Current != nullptr; Current = Current->Right, index++)
      list->Insert(Lambda(Current->Data, index));
    return *list;
  }
  template <typename Type>
  inline LinkedList<Type>::~LinkedList()
  {
    this->ClearList();
  }
  template <typename Type>
  inline Type LinkedList<Type>::At(size_t Index)
  {
    if (this->Size() <= Index)
      throw std::range_error("invalid range");
    Node *Current = this->Front;
    while (Current && Index)
    {
      Index--;
      Current = Current->Right;
    }

    return Current->Data;
  }
  template <typename Type>
  inline Type LinkedList<Type>::operator[](int Index)
  {
    return this->At(Index);
  }
}
