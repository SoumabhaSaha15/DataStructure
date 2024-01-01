#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#define type void*

typedef struct Node {
  type Data;
  struct Node *Pre, *Post;
} Node;
typedef struct DoubleLinkedList {
  Node *Begin, *Element, *End;
} List;

size_t SizeOf(List *list) {
  size_t length = 0;
  for (Node *node = list->Begin; node != NULL; node = node->Post)
    length++;
  return length;
}
void InitiateList(List *list, type data, int size) {
  Node *newNode = (Node *)malloc(sizeof(Node));
  newNode->Pre = NULL;
  newNode->Post = NULL;
  newNode->Data = malloc(size);
  newNode->Data = data;
  (*list).Element = newNode;
  (*list).Begin = (*list).Element;
  (*list).End = (*list).Element;
}
void InsertAtLast(List *list, type Data, int size) {
  Node *newNode = (Node *)malloc(sizeof(Node));
  newNode->Data = malloc(size);
  newNode->Data = Data;
  newNode->Pre = (*list).Element;
  newNode->Post = NULL;
  (*list).Element->Post = newNode;
  (*list).Element = (*list).Element->Post;
  (*list).End = (*list).Element;
}
void InsertAtFirst(List *list, type Data, int size) {
  Node *newNode = (Node *)malloc(sizeof(Node));
  newNode->Data = malloc(size);
  newNode->Data = Data;
  newNode->Pre = NULL;
  newNode->Post = (*list).Begin;
  (*list).Begin->Pre = newNode;
  (*list).Begin = newNode;
}
void InsertAtSpecific(List *list, type Data, int size, size_t index) {
  if (index >= SizeOf(list))
    printf("\n!!!out of range!!!\n");
  else {
    if (index == 0)
      InsertAtFirst(list, Data, size);
    else if (index == (SizeOf(list) - 1))
      InsertAtLast(list, Data, size);
    else {
      Node *node = (*list).Begin;
      Node *newNode = (Node *)malloc(sizeof(Node));
      newNode->Data = Data;
      for (size_t i = 0; i < index; i++)
        node = node->Post;
      newNode->Post = node;
      newNode->Pre = node->Pre;
      node->Pre = newNode;
      (newNode->Pre)->Post = newNode;
    }
  }
}
void Traverse(List *list, void func(void *)) {
  if (list->Begin == NULL) {
    printf("\nNULL\n");
  } else {
    printf("\n");
    for (Node *el = list->Begin; el != NULL; el = el->Post)
      func(el->Data);
    printf("\n");
  }
}
void ReverseTraverse(List *list, void func(void *)) {
  if (list->Begin == NULL) {
    printf("\nNULL\n");
  } else {
    printf("\n");
    for (Node *el = list->End; el != NULL; el = el->Pre)
      func(el->Data);
    printf("\n");
  }
}
void DeleteAtFirst(List *list) {
  if (SizeOf(list) == 0) {
    printf("\nNULL\n");
    return;
  } else {
    Node *node = (*list).Begin;
    (*list).Begin = (*list).Begin->Post;
    if ((*list).Begin != NULL)
      (*list).Begin->Pre = NULL;
    free(node);
  }
}
void DeleteAtLast(List *list) {
  if ((SizeOf(list) == 0)) {
    printf("\nNULL\n");
    return;
  } else {
    Node *node = (*list).End;
    (*list).End = (*list).End->Pre;
    if ((*list).End != NULL) {
      (*list).End->Post = NULL;
    } else {
      (*list).Begin = (*list).End;
    }
    (*list).Element = (*list).End;
    free(node);
  }
}
void DeleteAtSpecific(List *list, size_t index) {
  if(index >= SizeOf(list)){
    printf("\n!!!out of range!!!\n");
    return;
  }else{
    if(index == 0){
      DeleteAtFirst(list);
    }else if(index == (SizeOf(list)-1)){
      DeleteAtLast(list);
    }else{
      int c = index;
      Node *node = (*list).Begin;
      while(c!=0){
        node = node->Post;
        c--;
      }
      (node->Pre)->Post = node->Post;
      (node->Post)->Pre = node->Pre;
      free(node);
    }
  }
}
void ClearList(List *list) {
  while (SizeOf(list) != 0) {
    DeleteAtFirst(list);
    printf("\n list size : %lu \n", SizeOf(list));
  }
  list->Element = NULL;
  list->Begin = list->Element;
  list->End = list->Element;
}
