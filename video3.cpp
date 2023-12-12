// #include<bits/stdc++.h>
#include<iostream>
using namespace std;

// void printSum(int i , int sum, int N){
//     if(i>N){
//         cout<<sum;
//         return;
//     }
//     sum+=i;
//     printSum(i+1,sum,N);
// }

// PARAMERISED WAY
// int printSum(int i , int sum){
//     if(i<1){
//         return sum;
//     }
//     printSum(i-1,sum+i);
// }

// FUNCTIONAL WAY
// int printSum(int n){
//     if(n==0)return 0;
//     return n+printSum(n-1);
// }

int printMul(int N){
    if(N==1)return 1;
    return N*printMul(N-1);
}

int main(){
    // int res = printSum(5,0);
    // int res = printSum(5);
    int res = printMul(4);
    cout<<res;
    return 0;
}