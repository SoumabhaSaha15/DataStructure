#include <functional>
#include <iostream>
#include <string>
#pragma once
namespace DataStructureAndAlgorithm
{
    template <typename Type>
    class LinkedList
    {
    protected:
        class Node
        {
        public:
            Type Data;
            Node *Left, *Right;
            Node(Node *Left, Type Data, Node *Right);
        };
        Node *Front = nullptr;
        Node *Rear = nullptr;
        unsigned int Length = 0;

    public:
        void Insert(Type);
        void ClearList();
        void Delete(int = 0);
        int Size();
        Type At(int);
        Type operator[](int);
        void ForEach(const std::function<void(Type)> &Lambda);
        void ForEach(const std::function<void(Type, int)> &Lambda);
        void ForEach(const std::function<void(Type, int, LinkedList<Type>)> &Lambda);
        void Sort(const std::function<bool(Type, Type)> &Lambda);
        template <typename ConvertType>
        LinkedList<ConvertType> Form(const std::function<ConvertType(Type, int)> &Lambda);
        ~LinkedList();
    };
}
