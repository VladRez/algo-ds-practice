public class ZipCodes {
    public static void StringToList(String[] str){
//        List<String> args = Arrays.asList(str);
//        List<Integer[]> list = (List<Integer[]>) args.stream().map(arg->{
//            List<String> zipAsString = Arrays.asList(arg.split(","));
//            List<Integer[]> zips = (List<Integer[]>) zipAsString.stream().map(el->{
//               return Integer.parseInt(el);
//            });
//              return zips;
//        });
//        return list;
    }
    public static List<Integer[]> MergeRanges(Integer[][] ranges){
        SortRanges(ranges);
        List<Integer[]> original = new ArrayList<>(Arrays.asList(ranges));
        List<Integer[]> resolved = new ArrayList<>();
        Resolve(original, resolved);
        return resolved;
    }

    private static Integer[] JoinRange(Integer[] arr1, Integer[] arr2){
        Integer[] arr = new Integer[] {arr1[0], arr2[1]};
        return arr;
    }

    private static void SortRanges(Integer[][] ranges){
        Arrays.sort(ranges, new Comparator<Integer[]>() {
            @Override
            public int compare(Integer[] o1, Integer[] o2) {
                return Integer.compare(o2[0], o1[0]);
            }
        });
    }

    private static void Resolve(List<Integer[]> original, List<Integer[]> solution){

        while (original.size() >1){
            Integer[] item1 = original.remove(original.size() - 1);
            Integer[] item2 = original.remove(original.size() - 1);

            boolean overlapping = isOverlapping(item1, item2);

            if (overlapping){
                Integer[] joinedRange = JoinRange(item1, item2);
                original.add(joinedRange);
                continue;
            }

            solution.add(item1);
            original.add(item2);
        }

        if(original.size() > 0) solution.add(original.get(0));
    }

    private static boolean isOverlapping(Integer[] arr1, Integer[] arr2){
        Integer x1 = arr1[0];
        Integer x2 = arr1[1];
        Integer y1 = arr2[0];
        Integer y2 = arr2[1];

        Integer upperBound =  Collections.max(Arrays.asList(x2,y2));
        Integer lowerBound = Collections.min(Arrays.asList(x1,y1));
        return (upperBound - lowerBound) < (x2 - x1) + (y2 - y1);
    }
}
