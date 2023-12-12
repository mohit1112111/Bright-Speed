#include<bits/stdc++.h>
using namespace std;
// void Reverse(vector<int>& arr,int i,int j){
//     if(i>=j){
//         return;
//     }
//     swap(arr[i],arr[j]);
//     Reverse(arr,i+1,j-1);
// }
// void Reverse(vector<int>& arr,int i){
//     if(i>=arr.size()/2){
//         return;
//     }
//     swap(arr[i],arr[arr.size()-i-1]);
//     Reverse(arr,i+1);
// }


bool checkPalindrome(string str , int i){
    if(i>=str.length()/2)return true;
    if(str[i] != str[str.length()-i-1])return false;
    checkPalindrome(str,i+1);
}
int main(){
    // vector<int> arr = {1,2,3,4,5,6};
    // Reverse(arr,0);
    //  for(int i=0;i<arr.size();i++){
    //         cout<<arr[i]<<" ";
    //     }

    string str = "ABC";
    bool res = checkPalindrome(str,0);
    if(res){
        cout<<"YES";
    }else{
        cout<<"No";
    }
    return 0;

}