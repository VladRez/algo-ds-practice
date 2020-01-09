class Solution{
    int currentColor;
    public int [][] floodFill(int[][] image, int sr, int sc, int newColor){
        this.currentColor = image[sr][sc];
        if (currentColor != newColor) paint(image, sr, sc, newColor);
        return image;
    }

    public void paint(int[][], int r, int c, int newColor){
        if (image[r][c] == this.newColor){
            image[r][c] = newColor;
            
            if (r > 0) paint(image, r - 1, c, newColor);
            if (c > 0) paint(image, r, c - 1, newColor);
            if (r < image.length - 1) paint(image, r + 1, c, newColor);
            if (r < image[0].length) paint(image, r, c + 1, newColor);
        }
    }
}