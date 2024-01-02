#include <stdio.h>
int* GetInteger(){
  int unused __attribute__((unused));
  int *newInt = (int*)malloc(sizeof(int));
  printf("Enter Int : ");
  unused = scanf("%d", newInt);
  fflush(stdin);
  return newInt;
}

void PrintInt(void *Int) {
  int *newInt = (int*)Int;
  printf("{\n\tValue:%d\n}", *newInt);
}